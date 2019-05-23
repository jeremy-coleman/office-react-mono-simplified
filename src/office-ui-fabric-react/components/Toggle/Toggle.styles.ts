import { HighContrastSelector, getFocusStyle, FontWeights } from '@uifabric/styling';
import { IToggleStyleProps, IToggleStyles } from './Toggle.types';

const DEFAULT_PILL_WIDTH = 40;
const DEFAULT_PILL_HEIGHT = 20;
const DEFAULT_THUMB_SIZE = 12;

export const getStyles = (props: IToggleStyleProps): IToggleStyles => {
  const { theme, className, disabled, checked, inlineLabel, onOffMissing } = props;
  const { semanticColors, palette } = theme;

  // Tokens
  const pillUncheckedBackground = semanticColors.bodyBackground;
  const pillCheckedBackground = semanticColors.inputBackgroundChecked;
  // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBackgroundCheckedHovered
  const pillCheckedHoveredBackground = palette.themeDark;
  const thumbUncheckedHoveredBackground = palette.neutralDark;
  const pillCheckedDisabledBackground = semanticColors.disabledBodySubtext;
  const thumbBackground = semanticColors.smallInputBorder;
  const thumbCheckedBackground = semanticColors.inputForegroundChecked;
  const thumbDisabledBackground = semanticColors.disabledBodySubtext;
  const thumbCheckedDisabledBackground = semanticColors.disabledBackground;
  const pillBorderColor = semanticColors.smallInputBorder;
  const pillBorderHoveredColor = semanticColors.inputBorderHovered;
  const pillBorderDisabledColor = semanticColors.disabledBodySubtext;
  const textDisabledColor = semanticColors.disabledText;

  return {
    root: [
      'ms-Toggle',
      checked && 'is-checked',
      !disabled && 'is-enabled',
      disabled && 'is-disabled',
      theme.fonts.small,
      {
        marginBottom: '8px'
      },
      inlineLabel && {
        display: 'flex',
        alignItems: 'center'
      },
      className
    ],

    label: [
      'ms-Toggle-label',
      disabled && {
        color: textDisabledColor,
        selectors: {
          [HighContrastSelector]: {
            color: 'GrayText'
          }
        }
      },
      inlineLabel &&
        !onOffMissing && {
          marginRight: 16
        },
      onOffMissing &&
        inlineLabel && {
          order: 1,
          marginLeft: 16
        }
    ],

    container: [
      'ms-Toggle-innerContainer',
      {
        display: 'inline-flex',
        position: 'relative'
      }
    ],

    pill: [
      'ms-Toggle-background',
      getFocusStyle(theme, { inset: -3 }),
      {
        fontSize: '20px',
        boxSizing: 'border-box',
        width: DEFAULT_PILL_WIDTH,
        height: DEFAULT_PILL_HEIGHT,
        borderRadius: DEFAULT_PILL_HEIGHT / 2,
        transition: 'all 0.1s ease',
        border: `1px solid ${pillBorderColor}`,
        background: pillUncheckedBackground,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3px'
      },
      !disabled && [
        !checked && {
          selectors: {
            ':hover': [
              {
                borderColor: pillBorderHoveredColor
              }
            ],
            ':hover .ms-Toggle-thumb': [
              {
                backgroundColor: thumbUncheckedHoveredBackground,
                selectors: {
                  [HighContrastSelector]: {
                    borderColor: 'Highlight'
                  }
                }
              }
            ]
          }
        },
        checked && [
          {
            background: pillCheckedBackground,
            borderColor: 'transparent',
            justifyContent: 'flex-end'
          },
          {
            selectors: {
              ':hover': [
                {
                  backgroundColor: pillCheckedHoveredBackground,
                  borderColor: 'transparent',
                  selectors: {
                    [HighContrastSelector]: {
                      backgroundColor: 'Highlight'
                    }
                  }
                }
              ],
              [HighContrastSelector]: {
                backgroundColor: 'WindowText'
              }
            }
          }
        ]
      ],
      disabled && [
        {
          cursor: 'default'
        },
        !checked && [
          {
            borderColor: pillBorderDisabledColor
          }
        ],
        checked && [
          {
            backgroundColor: pillCheckedDisabledBackground,
            borderColor: 'transparent',
            justifyContent: 'flex-end'
          }
        ]
      ],
      !disabled && {
        selectors: {
          '&:hover': {
            selectors: {
              [HighContrastSelector]: {
                borderColor: 'Highlight'
              }
            }
          }
        }
      }
    ],

    thumb: [
      'ms-Toggle-thumb',
      {
        width: DEFAULT_THUMB_SIZE,
        height: DEFAULT_THUMB_SIZE,
        borderRadius: '50%',
        transition: 'all 0.1s ease',
        backgroundColor: thumbBackground,
        /* Border is added to handle high contrast mode for Firefox */
        borderColor: 'transparent',
        borderWidth: '.28em',
        borderStyle: 'solid',
        boxSizing: 'border-box'
      },
      !disabled &&
        checked && [
          {
            backgroundColor: thumbCheckedBackground,
            selectors: {
              [HighContrastSelector]: {
                backgroundColor: 'Window',
                borderColor: 'Window'
              }
            }
          }
        ],
      disabled && [
        !checked && [
          {
            backgroundColor: thumbDisabledBackground
          }
        ],
        checked && [
          {
            backgroundColor: thumbCheckedDisabledBackground
          }
        ]
      ]
    ],

    text: [
      'ms-Toggle-stateText',
      {
        selectors: {
          // Workaround: make rules more specific than Label rules.
          '&&': {
            padding: '0',
            margin: '0 8px',
            userSelect: 'none',
            fontWeight: FontWeights.regular
          }
        }
      },
      disabled && {
        selectors: {
          '&&': {
            color: textDisabledColor,
            selectors: {
              [HighContrastSelector]: {
                color: 'GrayText'
              }
            }
          }
        }
      }
    ]
  };
};
