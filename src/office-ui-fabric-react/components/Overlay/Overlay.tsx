import { styled } from '@uifabric/utilities';
import { IOverlayProps, IOverlayStyleProps, IOverlayStyles } from './Overlay.types';
import { OverlayBase } from './Overlay.base';
import { getStyles } from './Overlay.styles';

export const Overlay: React.FunctionComponent<IOverlayProps> = styled<IOverlayProps, IOverlayStyleProps, IOverlayStyles>(
  OverlayBase,
  getStyles,
  undefined,
  {
    scope: 'Overlay'
  }
);
