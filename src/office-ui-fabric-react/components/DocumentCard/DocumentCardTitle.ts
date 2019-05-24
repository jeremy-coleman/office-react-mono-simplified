import { styled } from '@uifabric/utilities';
import { DocumentCardTitleBase } from './DocumentCardTitle.base';
import { getStyles } from './DocumentCardTitle.styles';
import { IDocumentCardTitleProps, IDocumentCardTitleStyleProps, IDocumentCardTitleStyles } from './DocumentCardTitle.types';

export const DocumentCardTitle: React.FunctionComponent<IDocumentCardTitleProps> = styled<
  IDocumentCardTitleProps,
  IDocumentCardTitleStyleProps,
  IDocumentCardTitleStyles
>(DocumentCardTitleBase, getStyles, undefined, { scope: 'DocumentCardTitle' });
