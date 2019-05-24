import { styled } from '@uifabric/utilities';
import { IShimmerProps, IShimmerStyleProps, IShimmerStyles } from './Shimmer.types';
import { getStyles } from './Shimmer.styles';
import { ShimmerBase } from './Shimmer.base';

export const Shimmer: React.FunctionComponent<IShimmerProps> = styled<IShimmerProps, IShimmerStyleProps, IShimmerStyles>(
  ShimmerBase,
  getStyles,
  undefined,
  {
    scope: 'Shimmer'
  }
);
