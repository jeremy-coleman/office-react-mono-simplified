import { styled } from '@uifabric/utilities';
import { DetailsHeaderBase } from './DetailsHeader.base';
import { getStyles } from './DetailsHeader.styles';
import { IDetailsHeaderBaseProps, IDetailsHeaderStyleProps, IDetailsHeaderStyles } from './DetailsHeader.types';



export const DetailsHeader: React.FunctionComponent<IDetailsHeaderBaseProps> = styled<
  IDetailsHeaderBaseProps,
  IDetailsHeaderStyleProps,
  IDetailsHeaderStyles
>(DetailsHeaderBase, getStyles, undefined, { scope: 'DetailsHeader' });
