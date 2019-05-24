import { getStyles } from './ScrollablePane.styles';
import { IScrollablePaneProps, IScrollablePaneStyleProps, IScrollablePaneStyles } from './ScrollablePane.types';
import { ScrollablePaneBase } from './ScrollablePane.base';
import { styled } from '@uifabric/utilities';

export const ScrollablePane: React.FunctionComponent<IScrollablePaneProps> = styled<
  IScrollablePaneProps,
  IScrollablePaneStyleProps,
  IScrollablePaneStyles
>(ScrollablePaneBase, getStyles, undefined, { scope: 'ScrollablePane' });
