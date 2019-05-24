import { styled } from '@uifabric/utilities';
import { MessageBarBase } from './MessageBar.base';
import { getStyles } from './MessageBar.styles';
import { IMessageBarProps, IMessageBarStyleProps, IMessageBarStyles } from './MessageBar.types';

export const MessageBar: React.FunctionComponent<IMessageBarProps> = styled<IMessageBarProps, IMessageBarStyleProps, IMessageBarStyles>(
  MessageBarBase,
  getStyles,
  undefined,
  {
    scope: 'MessageBar'
  }
);
