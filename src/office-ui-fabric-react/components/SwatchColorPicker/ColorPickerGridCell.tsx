import { styled } from '@uifabric/utilities';
import { ColorPickerGridCellBase } from './ColorPickerGridCell.base';
import { IColorPickerGridCellProps, IColorPickerGridCellStyleProps, IColorPickerGridCellStyles } from './ColorPickerGridCell.types';
import { getStyles } from './ColorPickerGridCell.styles';

export const ColorPickerGridCell: React.FunctionComponent<IColorPickerGridCellProps> = styled<
  IColorPickerGridCellProps,
  IColorPickerGridCellStyleProps,
  IColorPickerGridCellStyles
>(ColorPickerGridCellBase, getStyles, undefined, { scope: 'ColorPickerGridCell' });
