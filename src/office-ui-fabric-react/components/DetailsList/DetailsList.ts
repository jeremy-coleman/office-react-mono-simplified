import { styled } from '@uifabric/utilities';
import { DetailsListBase } from './DetailsList.base';
import { getStyles } from './DetailsList.styles';
import { IDetailsListProps, IDetailsListStyleProps, IDetailsListStyles } from './DetailsList.types';


export const DetailsList: React.FunctionComponent<IDetailsListProps> = styled<
  IDetailsListProps,
  IDetailsListStyleProps,
  IDetailsListStyles
>(DetailsListBase, getStyles, undefined, {
  scope: 'DetailsList'
});
