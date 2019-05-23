import { IButtonStyles } from '../Button.types';
import { ITheme, concatStyleSets, FontWeights, HighContrastSelector } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getStyles as getBaseButtonStyles } from '../BaseButton.styles';
import { getStyles as getSplitButtonStyles } from '../SplitButton/SplitButton.styles';
import { primaryStyles, standardStyles } from '../ButtonThemes';

export const getStyles = memoizeFunction(
  (theme: ITheme, customStyles?: IButtonStyles, primary?: boolean): IButtonStyles => {
    const baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme);
    const splitButtonStyles: IButtonStyles = getSplitButtonStyles(theme);
    const compoundButtonStyles: IButtonStyles = {
      root: {
        maxWidth: '280px',
        minHeight: '72px',
        height: 'auto',
        padding: '16px 12px'
      },

      flexContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        minWidth: '100%',
        margin: ''
      },

      textContainer: {
        textAlign: 'left'
      },

      icon: {
        fontSize: '2em',
        lineHeight: '1em',
        height: '1em',
        margin: '0px 8px 0px 0px',
        flexBasis: '1em',
        flexShrink: '0'
      },

      label: {
        margin: '0 0 5px',
        lineHeight: '100%',
        fontWeight: FontWeights.semibold
      },
      description: [
        theme.fonts.xSmall,
        {
          lineHeight: '100%'
        }
      ]
    };

    const standardCompoundTheme: IButtonStyles = {
      description: {
        color: theme.palette.neutralSecondary
      },

      descriptionHovered: {
        color: theme.palette.neutralDark
      },

      descriptionPressed: {
        color: 'inherit'
      },

      descriptionChecked: {
        color: 'inherit'
      },

      descriptionDisabled: {
        color: 'inherit'
      }
    };

    const primaryCompoundTheme: IButtonStyles = {
      description: {
        color: theme.palette.white,
        selectors: {
          [HighContrastSelector]: {
            color: 'Window',
            backgroundColor: 'WindowText',
            MsHighContrastAdjust: 'none'
          }
        }
      },

      descriptionHovered: {
        color: theme.palette.white,
        selectors: {
          [HighContrastSelector]: {
            color: 'Window',
            backgroundColor: 'Highlight',
            MsHighContrastAdjust: 'none'
          }
        }
      },

      descriptionPressed: {
        color: 'inherit'
      },

      descriptionChecked: {
        color: 'inherit'
      },

      descriptionDisabled: {
        color: 'inherit',
        selectors: {
          [HighContrastSelector]: {
            color: 'inherit'
          }
        }
      }
    };

    return concatStyleSets(
      baseButtonStyles,
      compoundButtonStyles,
      primary ? primaryStyles(theme) : standardStyles(theme),
      primary ? primaryCompoundTheme : standardCompoundTheme,
      splitButtonStyles,
      customStyles
    )!;
  }
);
