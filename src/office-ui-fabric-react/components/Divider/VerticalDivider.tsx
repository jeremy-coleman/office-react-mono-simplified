import { IVerticalDividerProps, IVerticalDividerStyles, IVerticalDividerPropsStyles } from './VerticalDivider.types';
import { getStyles } from './VerticalDivider.styles';
import { VerticalDividerBase } from './VerticalDivider.base';
import { styled } from '@uifabric/utilities';

export const VerticalDivider: React.FunctionComponent<IVerticalDividerProps> = styled<
  IVerticalDividerProps,
  IVerticalDividerPropsStyles,
  IVerticalDividerStyles
>(VerticalDividerBase, getStyles, undefined, {
  scope: 'VerticalDivider'
});
