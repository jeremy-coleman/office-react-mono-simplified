import { styled } from '@uifabric/utilities';
import { ICalloutProps, ICalloutContentStyles, ICalloutContentStyleProps } from './Callout.types';
import { CalloutContentBase } from './CalloutContent.base';
import { getStyles } from './CalloutContent.styles';

export const CalloutContent: React.FunctionComponent<ICalloutProps> = styled<
  ICalloutProps,
  ICalloutContentStyleProps,
  ICalloutContentStyles
>(CalloutContentBase, getStyles, undefined, { scope: 'CalloutContent' });
