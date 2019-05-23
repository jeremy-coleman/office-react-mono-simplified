import * as React from 'react';
import { CheckBase } from './Check.base';
import { IStyle, ITheme } from '@uifabric/styling';
import { IRefObject } from '@uifabric/utilities';
import { IStyleFunctionOrObject } from '@uifabric/merge-styles';
/**
 * {@docCategory Check}
 */
export interface ICheckProps extends React.ClassAttributes<CheckBase> {
  /**
   * Gets the component ref.
   */
  componentRef?: IRefObject<ICheckProps>;

  /**
   * Whether or not this menu item is currently checked.
   * @defaultvalue false
   */
  checked?: boolean;

  /**
   * Call to provide customized styling that will layer on top of the variant rules
   */
  styles?: IStyleFunctionOrObject<ICheckStyleProps, ICheckStyles>;

  /**
   * Flag to always show the check icon. Not currently working.
   */
  alwaysShowCheck?: boolean;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Additional css class to apply to the Check
   * @defaultvalue undefined
   */
  className?: string;
}

/**
 * {@docCategory Check}
 */
export interface ICheckStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Accept custom classNames
   */
  className?: string;

  /**
   * Accept custom checkBox size in pixels.
   * @defaultvalue '18px'
   */
  checkBoxHeight?: string;

  checked?: boolean;
}

/**
 * {@docCategory Check}
 */
export interface ICheckStyles {
  /**
   * Style for the root element.
   */
  root: IStyle;

  /**
   * The 'check' icon styles.
   */
  check: IStyle;

  /**
   * The 'circle' icon styles.
   */
  circle: IStyle;

  /**
   * Check host style
   */
  checkHost: IStyle;
}
