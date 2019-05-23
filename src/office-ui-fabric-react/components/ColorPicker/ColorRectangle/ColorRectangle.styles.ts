import { IColorRectangleStyleProps, IColorRectangleStyles } from './ColorRectangle.types';
import { HighContrastSelector } from '@uifabric/styling';

export const getStyles = (props: IColorRectangleStyleProps): IColorRectangleStyles => {
  const { className, theme } = props;
  const { palette, effects } = theme;

  return {
    root: [
      'ms-ColorPicker-colorRect',
      {
        position: 'relative',
        marginBottom: 10,
        border: `1px solid ${palette.neutralLighter}`,
        borderRadius: effects.roundedCorner2,
        selectors: {
          [HighContrastSelector]: {
            MsHighContrastAdjust: 'none'
          }
        }
      },
      className
    ],
    light: [
      'ms-ColorPicker-light',
      {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(to right, white 0%, transparent 100%)'
      }
    ],
    dark: [
      'ms-ColorPicker-dark',
      {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent 0, #000 100%)'
      }
    ],
    thumb: [
      'ms-ColorPicker-thumb',
      {
        position: 'absolute',
        width: 20,
        height: 20,
        background: 'white',
        border: `1px solid ${palette.neutralTertiary}`,
        borderRadius: '50%',
        boxShadow: effects.elevation8,
        transform: 'translate(-50%, -50%)'
      }
    ]
  };
};
