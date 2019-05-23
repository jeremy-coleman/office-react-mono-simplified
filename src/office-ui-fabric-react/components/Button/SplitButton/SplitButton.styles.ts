import { IButtonStyles } from '../Button.types';
import { ITheme, concatStyleSets, getFocusStyle } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export const getStyles = memoizeFunction(
  (theme: ITheme, customStyles?: IButtonStyles): IButtonStyles => {
    const { effects, palette } = theme;

    const buttonHighContrastFocus = {
      left: -2,
      top: -2,
      bottom: -2,
      right: -2,
      border: 'none'
    };

    const splitButtonStyles: IButtonStyles = {
      splitButtonContainer: [
        getFocusStyle(theme, { highContrastStyle: buttonHighContrastFocus }),
        {
          display: 'inline-flex',
          selectors: {
            '.ms-Button--default': {
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
              borderRight: 'none'
            },
            '.ms-Button--primary': {
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
              border: 'none'
            },
            '.ms-Button--primary + .ms-Button': {
              border: 'none'
            }
          }
        }
      ],
      splitButtonContainerFocused: {
        outline: 'none!important'
      },
      splitButtonMenuButton: {
        padding: 6,
        height: 'auto',
        boxSizing: 'border-box',
        borderRadius: 0,
        borderTopRightRadius: effects.roundedCorner2,
        borderBottomRightRadius: effects.roundedCorner2,
        border: `1px solid ${palette.neutralSecondaryAlt}`,
        borderLeft: 'none',
        outline: 'transparent',
        userSelect: 'none',
        display: 'inline-block',
        textDecoration: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        verticalAlign: 'top',
        width: 32,
        marginLeft: -1
      },

      splitButtonDivider: {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8
      },

      splitButtonMenuButtonDisabled: {
        pointerEvents: 'none',
        border: 'none',
        selectors: {
          ':hover': {
            cursor: 'default'
          }
        }
      },

      splitButtonFlexContainer: {
        display: 'flex',
        height: '100%',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
      },

      splitButtonContainerDisabled: {
        outline: 'none',
        border: 'none'
      }
    };

    return concatStyleSets(splitButtonStyles, customStyles)!;
  }
);
