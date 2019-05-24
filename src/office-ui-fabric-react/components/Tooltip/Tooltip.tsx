import { styled } from '@uifabric/utilities';
import { TooltipBase } from './Tooltip.base';
import { ITooltipProps, ITooltipStyleProps, ITooltipStyles } from './Tooltip.types';
import { getStyles } from './Tooltip.styles';

export const Tooltip: React.FunctionComponent<ITooltipProps> = styled<ITooltipProps, ITooltipStyleProps, ITooltipStyles>(
  TooltipBase,
  getStyles,
  undefined,
  {
    scope: 'Tooltip'
  }
);
