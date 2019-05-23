import * as React from 'react';
import { concatStyleSets, IStyleSet, IStyleFunctionOrObject, IConcatenatedStyleSet } from '@uifabric/merge-styles';
import { Customizations } from './customizations/Customizations';
import { CustomizerContext, ICustomizerContext } from './customizations/CustomizerContext';

export interface IPropsWithStyles<TStyleProps, TStyleSet extends IStyleSet<TStyleSet>> {
  styles?: IStyleFunctionOrObject<TStyleProps, TStyleSet>;
}

export interface ICustomizableProps {
  /**
   * Name of scope, which can be targeted using the Customizer.
   */
  scope: string;

  /**
   * List of fields which can be customized.
   * @defaultvalue [ 'theme', 'styles' ]
   */
  fields?: string[];
}

const DefaultFields = ['theme', 'styles'];

/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 * @param pure - A boolean indicating if the component should avoid re-rendering when props haven't changed.
 * Note that pure should not be used on components which allow children, or take in complex objects or
 * arrays as props which could mutate on every render.
 */
export function styled<
  TComponentProps extends IPropsWithStyles<TStyleProps, TStyleSet>,
  TStyleProps,
  TStyleSet extends IStyleSet<TStyleSet>
>(
  Component: React.ComponentClass<TComponentProps> | React.StatelessComponent<TComponentProps>,
  baseStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet>,
  getProps?: (props: TComponentProps) => Partial<TComponentProps>,
  customizable?: ICustomizableProps,
  pure?: boolean
): React.StatelessComponent<TComponentProps> {
  customizable = customizable || { scope: '', fields: undefined };

  const { scope, fields = DefaultFields } = customizable;
  const ParentComponent = pure ? React.PureComponent : React.Component;

  class Wrapped extends ParentComponent<TComponentProps, {}> {
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // tslint:disable-next-line:no-any
    public static displayName = `Styled${Component.displayName || (Component as any).name}`;

    private _inCustomizerContext = false;
    private _customizedStyles?: IStyleFunctionOrObject<TStyleProps, TStyleSet>;

    public render(): JSX.Element {
      return <CustomizerContext.Consumer>{this._renderContent}</CustomizerContext.Consumer>;
    }

    public componentDidMount(): void {
      if (!this._inCustomizerContext) {
        Customizations.observe(this._onSettingsChanged);
      }
    }

    public componentWillUnmount(): void {
      if (!this._inCustomizerContext) {
        Customizations.unobserve(this._onSettingsChanged);
      }
    }

    private _renderContent = (context: ICustomizerContext): JSX.Element => {
      this._inCustomizerContext = !!context.customizations.inCustomizerContext;

      const settings = Customizations.getSettings(fields, scope, context.customizations);
      const { styles: customizedStyles, ...rest } = settings;
      const additionalProps = getProps ? getProps(this.props) : undefined;

      this._customizedStyles = customizedStyles;

      return <Component {...rest} {...additionalProps} {...this.props} styles={this._resolveClassNames} />;
    };

    private _resolveClassNames = (styleProps: TStyleProps): IConcatenatedStyleSet<TStyleSet> | undefined => {
      return _resolve(styleProps, baseStyles, this._customizedStyles, this.props.styles);
    };

    private _onSettingsChanged = () => this.forceUpdate();
  }

  // This preserves backwards compatibility.
  // tslint:disable-next-line:no-any
  return Wrapped as any;
}

function _resolve<TStyleProps, TStyleSet extends IStyleSet<TStyleSet>>(
  styleProps: TStyleProps,
  ...allStyles: (IStyleFunctionOrObject<TStyleProps, TStyleSet> | undefined)[]
): IConcatenatedStyleSet<TStyleSet> | undefined {
  const result: Partial<TStyleSet>[] = [];

  for (const styles of allStyles) {
    if (styles) {
      result.push(typeof styles === 'function' ? styles(styleProps) : styles);
    }
  }
  if (result.length === 1) {
    return result[0] as IConcatenatedStyleSet<TStyleSet>;
  } else if (result.length) {
    // cliffkoh: I cannot figure out how to avoid the cast to any here.
    // It is something to do with the use of Omit in IStyleSet.
    // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
    // the official version).
    // tslint:disable-next-line:no-any
    return concatStyleSets(...(result as any)) as IConcatenatedStyleSet<TStyleSet>;
  }

  return undefined;
}


export {styled as legacyStyled}