import { IStackItemProps } from 'office-ui-fabric-react';
import { createComponent } from '@uifabric/foundation';
import { CardView as view } from './Card.view';
import { CardStyles as styles, CardTokens as tokens } from './Card.styles';
import { ICardProps } from './Card.types';
import { CardItem } from './CardItem';

const CardStatics = {
  Item: CardItem
};

export const Card: React.FunctionComponent<ICardProps> & {
  Item: React.FunctionComponent<IStackItemProps>;
} = createComponent({
  //@ts-ignore idk
  displayName: 'Card',
  view,
  styles,
  tokens,
  statics: CardStatics
});

export default Card;
