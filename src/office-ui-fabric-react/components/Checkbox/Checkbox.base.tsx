import * as React from 'react';
import { getId, classNamesFunction, mergeAriaAttributeValues, initializeComponentRef, warnMutuallyExclusive } from '@uifabric/utilities';
import { Icon } from '../Icon';
import { ICheckbox, ICheckboxProps, ICheckboxStyleProps, ICheckboxStyles } from './Checkbox.types';
import { KeytipData } from '../Keytip';

export interface ICheckboxState {
  /** Is true when Uncontrolled control is checked. */
  isChecked?: boolean;
}

const getClassNames = classNamesFunction<ICheckboxStyleProps, ICheckboxStyles>();

export class CheckboxBase extends React.Component<ICheckboxProps, ICheckboxState> implements ICheckbox {
  public static defaultProps: ICheckboxProps = {
    boxSide: 'start'
  };

  private _checkBox = React.createRef<HTMLInputElement>();
  private _id: string;
  private _classNames: { [key in keyof ICheckboxStyles]: string };

  public static getDerivedStateFromProps(props: ICheckboxProps, state: ICheckboxState): ICheckboxState {
    if (props.checked !== undefined) {
      return {
        ...state,
        isChecked: !!props.checked
      };
    }
    return state;
  }

  /**
   * Initialize a new instance of the Checkbox
   * @param props - Props for the component
   * @param context - Context or initial state for the base component.
   */
  constructor(props: ICheckboxProps, context?: any) {
    super(props, context);

    initializeComponentRef(this);

    if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
      warnMutuallyExclusive('Checkbox', props, {
        checked: 'defaultChecked'
      });
    }

    this._id = this.props.id || getId('checkbox-');
    this.state = {
      isChecked: !!(props.checked !== undefined ? props.checked : props.defaultChecked)
    };
  }

  /**
   * Render the Checkbox based on passed props
   */
  public render(): JSX.Element {
    const {
      checked,
      className,
      defaultChecked,
      disabled,
      inputProps,
      name,
      boxSide,
      theme,
      ariaLabel,
      ariaLabelledBy,
      ariaDescribedBy,
      styles,
      onRenderLabel = this._onRenderLabel,
      checkmarkIconProps,
      ariaPositionInSet,
      ariaSetSize,
      keytipProps,
      title
    } = this.props;

    const isChecked = checked === undefined ? this.state.isChecked : checked;
    const isReversed = boxSide !== 'start' ? true : false;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className,
      disabled,
      checked: isChecked,
      reversed: isReversed,
      isUsingCustomLabelRender: onRenderLabel !== this._onRenderLabel
    });

    return (
      <KeytipData keytipProps={keytipProps} disabled={disabled}>
        {(keytipAttributes: any): JSX.Element => (
          <div className={this._classNames.root}>
            <input
              type="checkbox"
              {...inputProps}
              data-ktp-execute-target={keytipAttributes['data-ktp-execute-target']}
              {...checked !== undefined && { checked }}
              {...defaultChecked !== undefined && { defaultChecked }}
              disabled={disabled}
              className={this._classNames.input}
              ref={this._checkBox}
              name={name}
              id={this._id}
              title={title}
              onChange={this._onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              aria-disabled={disabled}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={mergeAriaAttributeValues(ariaDescribedBy, keytipAttributes['aria-describedby'])}
              aria-posinset={ariaPositionInSet}
              aria-setsize={ariaSetSize}
            />
            <label className={this._classNames.label} htmlFor={this._id}>
              <div className={this._classNames.checkbox} data-ktp-target={keytipAttributes['data-ktp-target']}>
                <Icon iconName="CheckMark" {...checkmarkIconProps} className={this._classNames.checkmark} />
              </div>
              {onRenderLabel(this.props, this._onRenderLabel)}
            </label>
          </div>
        )}
      </KeytipData>
    );
  }

  public get checked(): boolean {
    return this.state.isChecked!;
  }

  public focus(): void {
    if (this._checkBox.current) {
      this._checkBox.current.focus();
    }
  }

  private _onFocus = (ev: React.FocusEvent<HTMLElement>): void => {
    const { inputProps } = this.props;

    if (inputProps && inputProps.onFocus) {
      inputProps.onFocus(ev);
    }
  };

  private _onBlur = (ev: React.FocusEvent<HTMLElement>): void => {
    const { inputProps } = this.props;

    if (inputProps && inputProps.onBlur) {
      inputProps.onBlur(ev);
    }
  };

  private _onChange = (ev: React.FormEvent<HTMLElement>): void => {
    const { disabled, onChange } = this.props;
    const { isChecked } = this.state;

    if (!disabled) {
      if (onChange) {
        onChange(ev, !isChecked);
      }

      if (this.props.checked === undefined) {
        this.setState({ isChecked: !isChecked });
      }
    }
  };

  private _onRenderLabel = (props: ICheckboxProps): JSX.Element | null => {
    const { label } = props;

    return label ? <span className={this._classNames.text}>{label}</span> : null;
  };
}
