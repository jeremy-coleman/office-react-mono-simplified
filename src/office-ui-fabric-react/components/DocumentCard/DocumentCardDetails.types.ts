import { IStyle, ITheme } from '@uifabric/styling';
import { IRefObject } from '@uifabric/utilities';
import { DocumentCardDetailsBase } from './DocumentCardDetails.base';
import { IStyleFunctionOrObject } from '@uifabric/merge-styles';
/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardDetails {}

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardDetailsProps extends React.Props<DocumentCardDetailsBase> {
  /**
   * Gets the component ref.
   */
  componentRef?: IRefObject<IDocumentCardDetails>;

  /**
   * Call to provide customized styling that will layer on top of the variant rules
   */
  styles?: IStyleFunctionOrObject<IDocumentCardDetailsStyleProps, IDocumentCardDetailsStyles>;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Optional override class name
   */
  className?: string;
}

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardDetailsStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Optional override class name
   */
  className?: string;
}

/**
 * {@docCategory DocumentCard}
 */
export interface IDocumentCardDetailsStyles {
  root: IStyle;
}
