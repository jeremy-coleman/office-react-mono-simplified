import * as React from 'react';
import { BaseButton } from '../BaseButton';
import { BaseComponent, customizable, nullRender } from '@uifabric/utilities';
import { IButtonProps } from '../Button.types';
import { getStyles } from './ActionButton.styles';

/**
 * {@docCategory Button}
 */
@customizable('ActionButton', ['theme', 'styles'], true)
export class ActionButton extends BaseComponent<IButtonProps, {}> {
  /**
   * Tell BaseComponent to bypass resolution of componentRef.
   */
  protected _skipComponentRefResolution = true;

  public render(): JSX.Element {
    const { styles, theme } = this.props;

    return (
      <BaseButton
        {...this.props}
        variantClassName="ms-Button--action ms-Button--command"
        styles={getStyles(theme!, styles)}
        onRenderDescription={nullRender}
      />
    );
  }
}
