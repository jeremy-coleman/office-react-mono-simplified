import { buildClassMap } from '../utilities';
import { AnimationStyles } from '../styles';
import { IAnimationStyles } from '../interfaces';

/**
 * {@docCategory AnimationClassNames}
 */
export const AnimationClassNames: { [key in keyof IAnimationStyles]?: string } = buildClassMap(AnimationStyles);
