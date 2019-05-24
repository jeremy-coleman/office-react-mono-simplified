import { styled } from '@uifabric/utilities';
import { IImageProps, IImageStyleProps, IImageStyles } from './Image.types';
import { ImageBase } from './Image.base';
import { getStyles } from './Image.styles';

export const Image: React.FunctionComponent<IImageProps> = styled<IImageProps, IImageStyleProps, IImageStyles>(
  ImageBase,
  getStyles,
  undefined,
  {
    scope: 'Image'
  },
  true
);
