import { ITooltipHostStyleProps, ITooltipHostStyles } from './TooltipHost.types';
import { getGlobalClassNames } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-TooltipHost'
};

export const getStyles = (props: ITooltipHostStyleProps): ITooltipHostStyles => {
  const { className, theme } = props;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        display: 'inline'
      },
      className
    ]
  };
};
