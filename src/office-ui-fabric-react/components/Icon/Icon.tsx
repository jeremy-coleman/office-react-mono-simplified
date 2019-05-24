import { styled } from '@uifabric/utilities';
import { IIconProps, IIconStyleProps, IIconStyles } from './Icon.types';
import { IconBase } from './Icon.base';
import { getStyles } from './Icon.styles';

/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
export const Icon: React.FunctionComponent<IIconProps> = styled<IIconProps, IIconStyleProps, IIconStyles>(
  IconBase,
  getStyles,
  undefined,
  {
    scope: 'Icon'
  },
  true
);
