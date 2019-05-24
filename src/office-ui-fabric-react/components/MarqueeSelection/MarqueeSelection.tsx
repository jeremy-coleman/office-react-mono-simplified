import { styled } from '@uifabric/utilities';
import { MarqueeSelectionBase } from './MarqueeSelection.base';
import { getStyles } from './MarqueeSelection.styles';
import { IMarqueeSelectionProps } from './MarqueeSelection.types';

export const MarqueeSelection: React.FunctionComponent<IMarqueeSelectionProps> = styled(MarqueeSelectionBase, getStyles, undefined, {
  scope: 'MarqueeSelection'
});