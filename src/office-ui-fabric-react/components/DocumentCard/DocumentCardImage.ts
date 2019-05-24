import { styled } from '@uifabric/utilities';
import { DocumentCardImageBase } from './DocumentCardImage.base';
import { getStyles } from './DocumentCardImage.styles';
import { IDocumentCardImageProps, IDocumentCardImageStyleProps, IDocumentCardImageStyles } from './DocumentCardImage.types';

export const DocumentCardImage: React.FunctionComponent<IDocumentCardImageProps> = styled<
  IDocumentCardImageProps,
  IDocumentCardImageStyleProps,
  IDocumentCardImageStyles
>(DocumentCardImageBase, getStyles, undefined, { scope: 'DocumentCardImage' });
