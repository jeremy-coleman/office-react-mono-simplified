import { IShimmerGapStyleProps, IShimmerGapStyles } from './ShimmerGap.types';
import { IRawStyle, getGlobalClassNames, HighContrastSelector } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-ShimmerGap-root'
};

export function getStyles(props: IShimmerGapStyleProps): IShimmerGapStyles {
  const { height, borderStyle, theme } = props;

  const { palette } = theme;
  const globalClassNames = getGlobalClassNames(GlobalClassNames, theme);

  const borderStyles: IRawStyle = !!borderStyle ? borderStyle : {};

  return {
    root: [
      globalClassNames.root,
      theme.fonts.small,
      {
        backgroundColor: palette.white,
        height: `${height}px`,
        boxSizing: 'content-box',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderColor: palette.white,
        selectors: {
          [HighContrastSelector]: {
            backgroundColor: 'Window',
            borderColor: 'Window'
          }
        }
      },
      borderStyles
    ]
  };
}
