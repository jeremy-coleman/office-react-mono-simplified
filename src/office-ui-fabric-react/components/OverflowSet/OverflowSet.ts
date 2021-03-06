import { styled } from '@uifabric/utilities';
import { OverflowSetBase } from './OverflowSet.base';
import { getStyles } from './OverflowSet.styles';
import { IOverflowSetProps } from './OverflowSet.types';

export const OverflowSet: React.FunctionComponent<IOverflowSetProps> = styled(OverflowSetBase, getStyles, undefined, {
  scope: 'OverflowSet'
});
