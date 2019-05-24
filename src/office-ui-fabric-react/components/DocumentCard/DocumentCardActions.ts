import { styled } from '@uifabric/utilities';
import { DocumentCardActionsBase } from './DocumentCardActions.base';
import { getStyles } from './DocumentCardActions.styles';
import { IDocumentCardActionsProps, IDocumentCardActionsStyleProps, IDocumentCardActionsStyles } from './DocumentCardActions.types';

export const DocumentCardActions: React.FunctionComponent<IDocumentCardActionsProps> = styled<
  IDocumentCardActionsProps,
  IDocumentCardActionsStyleProps,
  IDocumentCardActionsStyles
>(DocumentCardActionsBase, getStyles, undefined, { scope: 'DocumentCardActions' });
