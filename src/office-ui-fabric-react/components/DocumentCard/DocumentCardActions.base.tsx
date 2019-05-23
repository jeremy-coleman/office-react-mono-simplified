import * as React from 'react';
import { BaseComponent, classNamesFunction } from '@uifabric/utilities';
import { Icon } from '../../components';
import { IDocumentCardActionsProps, IDocumentCardActionsStyleProps, IDocumentCardActionsStyles } from './DocumentCardActions.types';
import { IconButton } from '../../components';
import { IProcessedStyleSet } from '@uifabric/styling';

const getClassNames = classNamesFunction<IDocumentCardActionsStyleProps, IDocumentCardActionsStyles>();

/**
 * {@docCategory DocumentCard}
 */
export class DocumentCardActionsBase extends BaseComponent<IDocumentCardActionsProps, any> {
  private _classNames: IProcessedStyleSet<IDocumentCardActionsStyles>;

  public render(): JSX.Element {
    const { actions, views, styles, theme, className } = this.props;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div className={this._classNames.root}>
        {actions &&
          actions.map((action, index) => {
            return (
              <div className={this._classNames.action} key={index}>
                <IconButton {...action} />
              </div>
            );
          })}

        {views! > 0 && (
          <div className={this._classNames.views}>
            <Icon iconName="View" className={this._classNames.viewsIcon} />
            {views}
          </div>
        )}
      </div>
    );
  }
}
