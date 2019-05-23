import { styled } from '@uifabric/utilities';
import { IDialogProps, IDialogStyleProps, IDialogStyles } from './Dialog.types';
import { DialogBase } from './Dialog.base';
import { getStyles } from './Dialog.styles';

export const Dialog: React.StatelessComponent<IDialogProps> = styled<IDialogProps, IDialogStyleProps, IDialogStyles>(
  DialogBase,
  getStyles,
  undefined,
  { scope: 'Dialog' }
);
