import { styled } from '@uifabric/utilities';
import { DocumentCardLocationBase } from './DocumentCardLocation.base';
import { getStyles } from './DocumentCardLocation.styles';
import { IDocumentCardLocationProps, IDocumentCardLocationStyleProps, IDocumentCardLocationStyles } from './DocumentCardLocation.types';

export const DocumentCardLocation: React.FunctionComponent<IDocumentCardLocationProps> = styled<
  IDocumentCardLocationProps,
  IDocumentCardLocationStyleProps,
  IDocumentCardLocationStyles
>(DocumentCardLocationBase, getStyles, undefined, { scope: 'DocumentCardLocation' });
