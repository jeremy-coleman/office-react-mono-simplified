import { IStyle } from '@uifabric/styling';
import { RectangleEdge } from '@uifabric/utilities';
import { IDropdownStyleProps, IDropdownStyles } from 'office-ui-fabric-react';

export const DropdownStyles = (props: IDropdownStyleProps): Partial<IDropdownStyles> => {
  const { disabled, hasError, isOpen, calloutRenderEdge, theme, isRenderingPlaceholder } = props;
  if (!theme) {
    throw new Error('theme is undefined or null in base Dropdown getStyles function.');
  }
  const { palette, effects } = theme;
  const ITEM_HEIGHT = '36px';

  const titleOpenBorderRadius =
    calloutRenderEdge === RectangleEdge.bottom
      ? `${effects.roundedCorner2} ${effects.roundedCorner2} 0 0`
      : `0 0 ${effects.roundedCorner2} ${effects.roundedCorner2}`;

  const calloutOpenBorderRadius =
    calloutRenderEdge === RectangleEdge.bottom
      ? `0 0 ${effects.roundedCorner2} ${effects.roundedCorner2}`
      : `${effects.roundedCorner2} ${effects.roundedCorner2} 0 0`;

  const commonItemStyles: IStyle = {
    minHeight: ITEM_HEIGHT,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center'
  };

  const itemSelectors = (isSelected: boolean = false) => {
    return {
      // TODO
      // After moving fluent to become the default design of Fabric we should revisit this selectors to match the fluent redlines.
      // Currently whenever you hover over an item it forces focus on it so we style the background change through focus selector.
      selectors: {
        '&:hover:focus': {
          color: palette.neutralDark,
          backgroundColor: !isSelected ? palette.neutralLighter : palette.neutralLight
        },
        '&:focus': {
          backgroundColor: !isSelected ? 'transparent' : palette.neutralLight
        },
        '&:active': {
          color: palette.neutralDark,
          backgroundColor: !isSelected ? palette.neutralLighter : palette.neutralLight
        }
      }
    };
  };

  return {
    dropdown: [
      disabled && {
        selectors: {
          // Title placeholder states when disabled.
          ['&:hover .ms-Dropdown-titleIsPlaceHolder']: { color: palette.neutralTertiary },
          ['&:focus .ms-Dropdown-titleIsPlaceHolder']: { color: palette.neutralTertiary },
          ['&:active .ms-Dropdown-titleIsPlaceHolder']: { color: palette.neutralTertiary }
        }
      },
      !disabled && {
        selectors: {
          // Title and border states. For :hover and :focus even if the styles are the same we need to keep them separate for specificity
          // reasons in order :active borderColor to work.
          ['&:hover .ms-Dropdown-title']: {
            color: palette.neutralDark,
            borderColor: !isOpen ? palette.neutralPrimary : palette.themePrimary
          },
          ['&:focus .ms-Dropdown-title']: {
            color: palette.neutralDark,
            borderColor: !isOpen ? palette.neutralPrimary : palette.themePrimary
          },
          ['&:active .ms-Dropdown-title']: {
            color: palette.neutralDark,
            borderColor: palette.themePrimary
          },

          // CaretDown states are the same for focus, hover, active.
          ['&:hover .ms-Dropdown-caretDown, &:focus .ms-Dropdown-caretDown, &:active .ms-Dropdown-caretDown']: {
            color: palette.neutralPrimary
          },

          // Title placeholder states when not disabled.
          ['&:hover .ms-Dropdown-titleIsPlaceHolder, &:focus .ms-Dropdown-titleIsPlaceHolder, &:active .ms-Dropdown-titleIsPlaceHolder']: {
            color: palette.neutralDark
          },

          // Title has error states
          ['&:hover .ms-Dropdown-title--hasError, &:focus .ms-Dropdown-title--hasError, &:active .ms-Dropdown-title--hasError']: {
            borderColor: palette.redDark,
            color: isRenderingPlaceholder ? palette.neutralSecondary : palette.neutralPrimary
          }
        }
      }
    ],
    title: [
      {
        borderRadius: isOpen ? titleOpenBorderRadius : effects.roundedCorner2,
        borderColor: palette.neutralSecondaryAlt,
        padding: `0 28px 0 8px`
      },
      hasError && { borderColor: !isOpen ? palette.red : palette.redDark },
      isOpen && !hasError && { borderColor: palette.themePrimary },
      disabled && { color: palette.neutralTertiary }
    ],
    caretDownWrapper: {
      right: 8
    },
    caretDown: [
      disabled && {
        color: palette.neutralTertiary
      }
    ],
    errorMessage: { color: palette.redDark },
    callout: {
      border: 'none',
      borderRadius: calloutOpenBorderRadius,
      boxShadow: effects.elevation8,
      selectors: {
        ['.ms-Callout-main']: { borderRadius: calloutOpenBorderRadius }
      }
    },
    dropdownItemHeader: {
      padding: '0 8px',
      height: ITEM_HEIGHT,
      lineHeight: ITEM_HEIGHT
    },
    dropdownItem: [commonItemStyles, itemSelectors()],
    dropdownItemSelected: [
      {
        backgroundColor: palette.neutralLight,
        color: palette.neutralDark
      },
      commonItemStyles,
      itemSelectors(true)
    ],
    dropdownItemDisabled: {
      ...commonItemStyles,
      color: palette.neutralTertiary
    },
    dropdownItemSelectedAndDisabled: {
      ...commonItemStyles,
      color: palette.neutralTertiary
    }
  };
};
