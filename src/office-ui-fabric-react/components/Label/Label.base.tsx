import * as React from 'react';
import { divProperties, getNativeProps } from '@uifabric/utilities';
import { classNamesFunction } from '@uifabric/utilities';
import { ILabelProps, ILabelStyleProps, ILabelStyles } from './Label.types';

const getClassNames = classNamesFunction<ILabelStyleProps, ILabelStyles>();
export class LabelBase extends React.Component<ILabelProps, {}> {
  public render(): JSX.Element {
    const { as: RootType = 'label', children, className, disabled, styles, required, theme } = this.props;
    const classNames = getClassNames(styles, {
      className,
      disabled,
      required,
      theme: theme!
    });
    return (
      <RootType {...getNativeProps(this.props, divProperties)} className={classNames.root}>
        {children}
      </RootType>
    );
  }
}
