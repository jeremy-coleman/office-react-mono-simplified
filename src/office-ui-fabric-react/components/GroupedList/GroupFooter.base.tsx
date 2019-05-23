import * as React from 'react';
import { classNamesFunction } from '@uifabric/utilities';
import { GroupSpacer } from './GroupSpacer';
import { IGroupFooterStyleProps, IGroupFooterStyles, IGroupFooterProps } from './GroupFooter.types';
const getClassNames = classNamesFunction<IGroupFooterStyleProps, IGroupFooterStyles>();

export class GroupFooterBase extends React.Component<IGroupFooterProps> {
  public render(): JSX.Element | null {
    const { group, groupLevel, footerText, indentWidth, styles, theme } = this.props;
    const classNames = getClassNames(styles, { theme: theme! });

    if (group && footerText) {
      return (
        <div className={classNames.root}>
          <GroupSpacer indentWidth={indentWidth} count={groupLevel!} />
          {footerText}
        </div>
      );
    }
    return null;
  }
}
