import { IShimmerLineStyleProps, IShimmerLineStyles } from './ShimmerLine.types';
import { IRawStyle, getGlobalClassNames, HighContrastSelector } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-ShimmerLine-root',
  topLeftCorner: 'ms-ShimmerLine-topLeftCorner',
  topRightCorner: 'ms-ShimmerLine-topRightCorner',
  bottomLeftCorner: 'ms-ShimmerLine-bottomLeftCorner',
  bottomRightCorner: 'ms-ShimmerLine-bottomRightCorner'
};

export function getStyles(props: IShimmerLineStyleProps): IShimmerLineStyles {
  const { height, borderStyle, theme } = props;

  const { palette } = theme;
  const globalClassNames = getGlobalClassNames(GlobalClassNames, theme);

  const borderStyles: IRawStyle = !!borderStyle ? borderStyle : {};

  const sharedCornerStyles: IRawStyle = {
    position: 'absolute',
    fill: palette.white
  };

  return {
    root: [
      globalClassNames.root,
      theme.fonts.small,
      {
        height: `${height}px`,
        boxSizing: 'content-box',
        position: 'relative',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderColor: palette.white,
        selectors: {
          [HighContrastSelector]: {
            borderColor: 'Window',
            selectors: {
              '> *': {
                fill: 'Window'
              }
            }
          }
        }
      },
      borderStyles
    ],
    topLeftCorner: [
      globalClassNames.topLeftCorner,
      {
        top: '0',
        left: '0'
      },
      sharedCornerStyles
    ],
    topRightCorner: [
      globalClassNames.topRightCorner,
      {
        top: '0',
        right: '0'
      },
      sharedCornerStyles
    ],
    bottomRightCorner: [
      globalClassNames.bottomRightCorner,
      {
        bottom: '0',
        right: '0'
      },
      sharedCornerStyles
    ],
    bottomLeftCorner: [
      globalClassNames.bottomLeftCorner,
      {
        bottom: '0',
        left: '0'
      },
      sharedCornerStyles
    ]
  };
}
