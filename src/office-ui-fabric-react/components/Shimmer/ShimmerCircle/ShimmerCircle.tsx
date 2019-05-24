import { styled } from '@uifabric/utilities';
import { getStyles } from './ShimmerCircle.styles';
import { IShimmerCircleProps, IShimmerCircleStyleProps, IShimmerCircleStyles } from './ShimmerCircle.types';
import { ShimmerCircleBase } from './ShimmerCircle.base';

export const ShimmerCircle: React.FunctionComponent<IShimmerCircleProps> = styled<
  IShimmerCircleProps,
  IShimmerCircleStyleProps,
  IShimmerCircleStyles
>(ShimmerCircleBase, getStyles, undefined, { scope: 'ShimmerCircle' });
