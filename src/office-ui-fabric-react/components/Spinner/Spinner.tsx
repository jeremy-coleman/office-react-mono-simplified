import { styled } from '@uifabric/utilities';
import { SpinnerBase } from './Spinner.base';
import { getStyles } from './Spinner.styles';
import { ISpinnerProps, ISpinnerStyles, ISpinnerStyleProps } from './Spinner.types';

export const Spinner: React.FunctionComponent<ISpinnerProps> = styled<ISpinnerProps, ISpinnerStyleProps, ISpinnerStyles>(
  SpinnerBase,
  getStyles,
  undefined,
  { scope: 'Spinner' }
);
