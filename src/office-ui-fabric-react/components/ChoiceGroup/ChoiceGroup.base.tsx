import * as React from 'react';

import { Label } from '../Label';
import {
  initializeComponentRef,
  warnDeprecations,
  warnMutuallyExclusive,
  classNamesFunction,
  find,
  getId,
  getNativeProps,
  divProperties
} from '@uifabric/utilities';
import { IChoiceGroup, IChoiceGroupOption, IChoiceGroupProps, IChoiceGroupStyleProps, IChoiceGroupStyles } from './ChoiceGroup.types';
import { ChoiceGroupOption, OnChangeCallback, OnFocusCallback } from './ChoiceGroupOption/index';

const getClassNames = classNamesFunction<IChoiceGroupStyleProps, IChoiceGroupStyles>();

export interface IChoiceGroupState {
  keyChecked: string | number;

  /** Is true when the control has focus. */
  keyFocused?: string | number;
}

/**
 * {@docCategory ChoiceGroup}
 */
export class ChoiceGroupBase extends React.Component<IChoiceGroupProps, IChoiceGroupState> implements IChoiceGroup {
  public static defaultProps: IChoiceGroupProps = {
    options: []
  };

  private _id: string;
  private _labelId: string;
  private _inputElement = React.createRef<HTMLInputElement>();
  private focusedVars: { [key: string]: OnFocusCallback } = {};
  private changedVars: { [key: string]: OnChangeCallback } = {};

  constructor(props: IChoiceGroupProps) {
    super(props);

    initializeComponentRef(this);

    if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
      warnDeprecations('ChoiceGroup', props, { onChanged: 'onChange' });
      warnMutuallyExclusive('ChoiceGroup', props, {
        selectedKey: 'defaultSelectedKey'
      });
    }

    const validDefaultSelectedKey: boolean = !!props.options && props.options.some(option => option.key === props.defaultSelectedKey);

    this.state = {
      keyChecked:
        props.defaultSelectedKey === undefined || !validDefaultSelectedKey ? this._getKeyChecked(props)! : props.defaultSelectedKey,
      keyFocused: undefined
    };

    this._id = getId('ChoiceGroup');
    this._labelId = getId('ChoiceGroupLabel');
  }

  /**
   * Gets the current checked option.
   */
  public get checkedOption(): IChoiceGroupOption | undefined {
    const { options = [] } = this.props;
    const { keyChecked: key } = this.state;
    return find(options, (value: IChoiceGroupOption) => value.key === key);
  }

  public componentWillReceiveProps(newProps: IChoiceGroupProps): void {
    const newKeyChecked = this._getKeyChecked(newProps);
    const oldKeyChecked = this._getKeyChecked(this.props);

    if (newKeyChecked !== oldKeyChecked) {
      this.setState({
        keyChecked: newKeyChecked!
      });
    }
  }

  public render(): JSX.Element {
    const { className, theme, styles, options, label, required, disabled, name, role } = this.props;
    const { keyChecked, keyFocused } = this.state;

    const divProps = getNativeProps(this.props, divProperties, ['onChange', 'className', 'required']);

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className,
      optionsContainIconOrImage: options!.some(option => Boolean(option.iconProps || option.imageSrc))
    });

    const ariaLabelledBy = this.props.ariaLabelledBy
      ? this.props.ariaLabelledBy
      : label
      ? this._id + '-label'
      : (this.props as any)['aria-labelledby'];

    return (
      <div role={role} className={classNames.applicationRole} {...divProps}>
        <div className={classNames.root} role="radiogroup" {...ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy }}>
          {label && (
            <Label className={classNames.label} required={required} id={this._id + '-label'}>
              {label}
            </Label>
          )}
          <div className={classNames.flexContainer}>
            {options!.map((option: IChoiceGroupOption) => {
              const innerOptionProps = {
                ...option,
                focused: option.key === keyFocused,
                checked: option.key === keyChecked,
                disabled: option.disabled || disabled,
                id: `${this._id}-${option.key}`,
                labelId: `${this._labelId}-${option.key}`,
                name: name || this._id,
                required
              };

              return (
                <ChoiceGroupOption
                  key={option.key}
                  onBlur={this._onBlur}
                  onFocus={this._onFocus(option.key)}
                  onChange={this._onChange(option.key)}
                  {...innerOptionProps}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  public focus() {
    const { options } = this.props;
    if (options) {
      for (const option of options) {
        const elementToFocus = document.getElementById(`${this._id}-${option.key}`);
        if (elementToFocus && elementToFocus.getAttribute('data-is-focusable') === 'true') {
          elementToFocus.focus(); // focus on checked or default focusable key
          return;
        }
      }
    }
    if (this._inputElement.current) {
      this._inputElement.current.focus();
    }
  }

  private _onFocus = (key: string) =>
    this.focusedVars[key]
      ? this.focusedVars[key]
      : (this.focusedVars[key] = (ev: React.FocusEvent<HTMLElement>, option: IChoiceGroupOption) => {
          this.setState({
            keyFocused: key,
            keyChecked: this.state.keyChecked
          });
        });

  private _onBlur = (ev: React.FocusEvent<HTMLElement>, option: IChoiceGroupOption) => {
    this.setState({
      keyFocused: undefined,
      keyChecked: this.state.keyChecked
    });
  };

  private _onChange = (key: string) =>
    this.changedVars[key]
      ? this.changedVars[key]
      : (this.changedVars[key] = (evt, option: IChoiceGroupOption) => {
          const { onChanged, onChange, selectedKey, options = [] } = this.props;

          // Only manage state in uncontrolled scenarios.
          if (selectedKey === undefined) {
            this.setState({
              keyChecked: key
            });
          }

          const originalOption = find(options, (value: IChoiceGroupOption) => value.key === key);

          // TODO: onChanged deprecated, remove else if after 07/17/2017 when onChanged has been removed.
          if (onChange) {
            onChange(evt, originalOption);
          } else if (onChanged) {
            onChanged(originalOption!);
          }
        });

  private _getKeyChecked(props: IChoiceGroupProps): string | number | undefined {
    if (props.selectedKey !== undefined) {
      return props.selectedKey;
    }

    const { options = [] } = props;

    const optionsChecked = options.filter((option: IChoiceGroupOption) => {
      return option.checked;
    });

    if (optionsChecked.length === 0) {
      return undefined;
    } else {
      return optionsChecked[0].key;
    }
  }
}
