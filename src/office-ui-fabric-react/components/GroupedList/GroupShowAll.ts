import { styled } from '@uifabric/utilities';
import { getStyles } from './GroupShowAll.styles';
import { GroupShowAllBase } from './GroupShowAll.base';
import { IGroupShowAllProps, IGroupShowAllStyleProps, IGroupShowAllStyles } from './GroupShowAll.types';
export { IGroupShowAllProps };

export const GroupShowAll: React.FunctionComponent<IGroupShowAllProps> = styled<
  IGroupShowAllProps,
  IGroupShowAllStyleProps,
  IGroupShowAllStyles
>(GroupShowAllBase, getStyles, undefined, { scope: 'GroupShowAll' });
