import { styled } from '@uifabric/utilities';
import { IContextualMenuProps, IContextualMenuStyleProps, IContextualMenuStyles } from './ContextualMenu.types';
import { ContextualMenuBase } from './ContextualMenu.base';
import { getStyles } from './ContextualMenu.styles';

/**
 * ContextualMenu description
 */
export const ContextualMenu: React.FunctionComponent<IContextualMenuProps> = styled<
  IContextualMenuProps,
  IContextualMenuStyleProps,
  IContextualMenuStyles
>(ContextualMenuBase, getStyles, undefined, { scope: 'ContextualMenu' });
