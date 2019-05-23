import { IShimmerElementsGroupStyleProps, IShimmerElementsGroupStyles } from './ShimmerElementsGroup.types';
import { getGlobalClassNames } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-ShimmerElementsGroup-root'
};

export function getStyles(props: IShimmerElementsGroupStyleProps): IShimmerElementsGroupStyles {
  const { flexWrap, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      theme.fonts.small,
      {
        display: 'flex',
        alignItems: 'center',
        flexWrap: flexWrap ? 'wrap' : 'nowrap',
        position: 'relative'
      }
    ]
  };
}
