import { getGlobalClassNames } from '@uifabric/styling';
import { IDocumentCardLogoStyleProps, IDocumentCardLogoStyles } from './DocumentCardLogo.types';

const GlobalClassNames = {
  root: 'ms-DocumentCardLogo'
};

export const getStyles = (props: IDocumentCardLogoStyleProps): IDocumentCardLogoStyles => {
  const { theme, className } = props;
  const { palette } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        fontSize: '32px',
        color: palette.themePrimary,
        display: 'block',
        padding: '16px 16px 0 16px'
      },
      className
    ]
  };
};
