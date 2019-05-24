import { getFocusStyle } from '@uifabric/styling';
import { IButtonStyles, IButtonProps } from 'office-ui-fabric-react';

export const CommandBarButtonStyles = (props: IButtonProps): Partial<IButtonStyles> => {
  const { theme } = props;
  if (!theme) {
    throw new Error('Theme is undefined or null.');
  }

  return {
    root: {
      ...getFocusStyle(theme, { inset: 2 })
    }
  };
};
