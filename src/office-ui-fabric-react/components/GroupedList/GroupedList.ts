import { styled } from '@uifabric/utilities';
import { GroupedListBase } from './GroupedList.base';
import { getStyles } from './GroupedList.styles';
import { IGroupedListProps, IGroupedListStyleProps, IGroupedListStyles } from './GroupedList.types';


export const GroupedList: React.FunctionComponent<IGroupedListProps> = styled<
  IGroupedListProps,
  IGroupedListStyleProps,
  IGroupedListStyles
>(GroupedListBase, getStyles, undefined, {
  scope: 'GroupedList'
});
