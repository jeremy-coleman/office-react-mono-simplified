import { getGlobalClassNames, HighContrastSelector } from '@uifabric/styling';
import { BaseComponent, classNamesFunction, IRenderFunction, KeyCodes, styled } from '@uifabric/utilities';
import * as React from 'react';
import { IBaseCardProps, IBaseCardStyleProps, IBaseCardStyles } from './BaseCard.types';
import { CardCallout } from './CardCallout';

/**
 * {@docCategory HoverCard}
 */
export interface IPlainCard {}

/**
 * PlainCard component props.
 * {@docCategory HoverCard}
 */
export interface IPlainCardProps extends IBaseCardProps<IPlainCard, IPlainCardStyles, IPlainCardStyleProps> {
  /**
   *  Render function to populate compact content area
   */
  onRenderPlainCard?: IRenderFunction<any>;
}

/**
 * {@docCategory HoverCard}
 */
export interface IPlainCardStyleProps extends IBaseCardStyleProps {}

/**
 * {@docCategory HoverCard}
 */
export interface IPlainCardStyles extends IBaseCardStyles {}


const GlobalClassNames = {
  root: 'ms-PlainCard-root'
};

function getStyles(props: IPlainCardStyleProps): IPlainCardStyles {
  const { theme, className } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        pointerEvents: 'auto',
        selectors: {
          [HighContrastSelector]: {
            border: '1px solid WindowText'
          }
        }
      },
      className
    ]
  };
}


const getClassNames = classNamesFunction<IPlainCardStyleProps, IPlainCardStyles>();

export class PlainCardBase extends BaseComponent<IPlainCardProps, {}> {
  private _classNames: { [key in keyof IPlainCardStyles]: string };

  public render(): JSX.Element {
    const { styles, theme, className } = this.props;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    const content: JSX.Element = (
      <div onMouseEnter={this.props.onEnter} onMouseLeave={this.props.onLeave} onKeyDown={this._onKeyDown}>
        {this.props.onRenderPlainCard!(this.props.renderData)}
      </div>
    );

    return <CardCallout {...this.props} content={content} className={this._classNames.root} />;
  }

  private _onKeyDown = (ev: React.KeyboardEvent<HTMLElement>): void => {
    if (ev.which === KeyCodes.escape) {
      this.props.onLeave && this.props.onLeave(ev);
    }
  };
}



export const PlainCard: React.FunctionComponent<IPlainCardProps> = styled<IPlainCardProps, IPlainCardStyleProps, IPlainCardStyles>(
  PlainCardBase,
  getStyles,
  undefined,
  {
    scope: 'PlainCard'
  }
);
