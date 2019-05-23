import * as React from 'react';
import { IProcessedStyleSet } from '@uifabric/styling';
import { BaseComponent, classNamesFunction } from '@uifabric/utilities';
import { IDocumentCardLocationProps, IDocumentCardLocationStyleProps, IDocumentCardLocationStyles } from './DocumentCardLocation.types';

const getClassNames = classNamesFunction<IDocumentCardLocationStyleProps, IDocumentCardLocationStyles>();

/**
 * {@docCategory DocumentCard}
 */
export class DocumentCardLocationBase extends BaseComponent<IDocumentCardLocationProps, any> {
  private _classNames: IProcessedStyleSet<IDocumentCardLocationStyles>;

  public render(): JSX.Element {
    const { location, locationHref, ariaLabel, onClick, styles, theme, className } = this.props;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <a className={this._classNames.root} href={locationHref} onClick={onClick} aria-label={ariaLabel}>
        {location}
      </a>
    );
  }
}
