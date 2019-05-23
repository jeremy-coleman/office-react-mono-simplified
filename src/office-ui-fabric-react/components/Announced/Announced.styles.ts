import { hiddenContentStyle } from '@uifabric/styling';
import { IAnnouncedStyles } from './Announced.types';

export const getStyles = (): IAnnouncedStyles => {
  return {
    screenReaderText: hiddenContentStyle
  };
};
