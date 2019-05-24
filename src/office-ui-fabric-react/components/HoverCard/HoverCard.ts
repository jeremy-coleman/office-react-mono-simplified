import { styled } from '@uifabric/utilities';
import { IHoverCardProps, IHoverCardStyles, IHoverCardStyleProps } from './HoverCard.types';
import { getStyles } from './HoverCard.styles';
import { HoverCardBase } from './HoverCard.base';

export const HoverCard: React.FunctionComponent<IHoverCardProps> = styled<IHoverCardProps, IHoverCardStyleProps, IHoverCardStyles>(
  HoverCardBase,
  getStyles,
  undefined,
  {
    scope: 'HoverCard'
  }
);
