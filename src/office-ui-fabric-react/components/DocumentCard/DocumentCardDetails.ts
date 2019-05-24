import { styled } from '@uifabric/utilities';
import { DocumentCardDetailsBase } from './DocumentCardDetails.base';
import { getStyles } from './DocumentCardDetails.styles';
import { IDocumentCardDetailsProps, IDocumentCardDetailsStyleProps, IDocumentCardDetailsStyles } from './DocumentCardDetails.types';

export const DocumentCardDetails: React.FunctionComponent<IDocumentCardDetailsProps> = styled<
  IDocumentCardDetailsProps,
  IDocumentCardDetailsStyleProps,
  IDocumentCardDetailsStyles
>(DocumentCardDetailsBase, getStyles, undefined, { scope: 'DocumentCardDetails' });
