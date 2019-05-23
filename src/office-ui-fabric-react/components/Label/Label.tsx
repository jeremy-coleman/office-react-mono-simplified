import { styled } from '@uifabric/utilities';
import { LabelBase } from './Label.base';
import { getStyles } from './Label.styles';
import { ILabelProps, ILabelStyleProps, ILabelStyles } from './Label.types';

export const Label: React.StatelessComponent<ILabelProps> = styled<ILabelProps, ILabelStyleProps, ILabelStyles>(
  LabelBase,
  getStyles,
  undefined,
  {
    scope: 'Label'
  }
);
