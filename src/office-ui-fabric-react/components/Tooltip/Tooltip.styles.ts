import { ITooltipStyleProps, ITooltipStyles, TooltipDelay } from './Tooltip.types';
import { AnimationClassNames } from '@uifabric/styling';

export const getStyles = (props: ITooltipStyleProps): ITooltipStyles => {
  const { className, delay, maxWidth, theme } = props;
  const { palette, fonts } = theme;

  return {
    root: [
      'ms-Tooltip',
      theme.fonts.small,
      AnimationClassNames.fadeIn200,
      {
        background: palette.white,
        padding: '8px',
        animationDelay: '300ms',
        maxWidth: maxWidth
      },
      delay === TooltipDelay.zero && {
        animationDelay: '0s'
      },
      delay === TooltipDelay.long && {
        animationDelay: '500ms'
      },
      className
    ],
    content: [
      'ms-Tooltip-content',
      fonts.xSmall,
      {
        color: palette.neutralPrimary,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        overflow: 'hidden'
      }
    ],
    subText: [
      'ms-Tooltip-subtext',
      {
        // Using inherit here to avoid unintentional global overrides of the <p> tag.
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        margin: 0
      }
    ]
  };
};
