import * as React from 'react';
import { BaseComponent, classNamesFunction, getNativeProps, divProperties, enableBodyScroll, disableBodyScroll } from '@uifabric/utilities';
import { IOverlayProps, IOverlayStyleProps, IOverlayStyles } from './Overlay.types';

const getClassNames = classNamesFunction<IOverlayStyleProps, IOverlayStyles>();

export class OverlayBase extends BaseComponent<IOverlayProps, {}> {
  public componentDidMount(): void {
    disableBodyScroll();
  }

  public componentWillUnmount(): void {
    enableBodyScroll();
  }

  public render(): JSX.Element {
    const { isDarkThemed: isDark, className, theme, styles } = this.props;

    const divProps = getNativeProps(this.props, divProperties);

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className,
      isDark
    });

    return <div {...divProps} className={classNames.root} />;
  }
}
