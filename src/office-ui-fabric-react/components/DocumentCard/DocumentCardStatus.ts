import { styled } from '@uifabric/utilities';
import { DocumentCardStatusBase } from './DocumentCardStatus.base';
import { getStyles } from './DocumentCardStatus.styles';
import { IDocumentCardStatusProps, IDocumentCardStatusStyleProps, IDocumentCardStatusStyles } from './DocumentCardStatus.types';

export const DocumentCardStatus: React.FunctionComponent<IDocumentCardStatusProps> = styled<
  IDocumentCardStatusProps,
  IDocumentCardStatusStyleProps,
  IDocumentCardStatusStyles
>(DocumentCardStatusBase, getStyles, undefined, { scope: 'DocumentCardStatus' });
