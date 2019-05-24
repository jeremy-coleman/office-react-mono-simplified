import { FontSizes } from '../FluentType';
import { FontWeights } from '@uifabric/styling';
import { IDetailsColumnStyles } from 'office-ui-fabric-react';

export const DetailsColumnStyles = (): Partial<IDetailsColumnStyles> => {
  return {
    cellName: {
      fontWeight: FontWeights.semibold,
      fontSize: FontSizes.size14
    },
    filterChevron: {
      fontSize: FontSizes.size12,
      paddingLeft: 6
    }
  };
};
