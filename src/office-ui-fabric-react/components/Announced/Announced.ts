import { styled } from '@uifabric/utilities';
import { IAnnouncedProps, IAnnouncedStyles } from './Announced.types';
import { AnnouncedBase } from './Announced.base';
import { getStyles } from './Announced.styles';

export const Announced: React.FunctionComponent<IAnnouncedProps> = styled<IAnnouncedProps, {}, IAnnouncedStyles>(AnnouncedBase, getStyles);
