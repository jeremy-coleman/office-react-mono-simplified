import { styled } from '@uifabric/utilities';
import { ShimmeredDetailsListBase } from './ShimmeredDetailsList.base';
import { getStyles } from './ShimmeredDetailsList.styles';
import { IShimmeredDetailsListProps, IShimmeredDetailsListStyleProps, IShimmeredDetailsListStyles } from './ShimmeredDetailsList.types';

export const ShimmeredDetailsList: React.FunctionComponent<IShimmeredDetailsListProps> = styled<
  IShimmeredDetailsListProps,
  IShimmeredDetailsListStyleProps,
  IShimmeredDetailsListStyles
>(ShimmeredDetailsListBase, getStyles, undefined, { scope: 'ShimmeredDetailsList' });
