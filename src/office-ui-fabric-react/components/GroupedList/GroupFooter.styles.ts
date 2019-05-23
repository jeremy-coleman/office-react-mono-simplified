import { IGroupFooterStyleProps, IGroupFooterStyles } from './GroupFooter.types';
import { getGlobalClassNames } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-groupFooter'
};

export const getStyles = (props: IGroupFooterStyleProps): IGroupFooterStyles => {
  const { theme, className } = props;
  const classNames = getGlobalClassNames(GlobalClassNames, theme!);

  return {
    root: [
      theme.fonts.small,
      classNames.root,
      {
        position: 'relative',
        padding: '5px 38px'
      },
      className
    ]
  };
};
