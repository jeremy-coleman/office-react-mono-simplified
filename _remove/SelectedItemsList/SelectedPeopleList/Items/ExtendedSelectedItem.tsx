/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { BaseComponent, css, getId } from '@uifabric/utilities';
import { Persona, PersonaSize } from '../../../Persona';
import { ISelectedPeopleItemProps } from '../SelectedPeopleList';
import { IconButton } from '../../../Button';
import * as styles from './ExtendedSelectedItemStyle';


export interface IPeoplePickerItemState {
  contextualMenuVisible: boolean;
}

//@ts-ignore
export class ExtendedSelectedItem extends BaseComponent<ISelectedPeopleItemProps, IPeoplePickerItemState> {
  protected persona = React.createRef<HTMLDivElement>();

  constructor(props: ISelectedPeopleItemProps) {
    super(props);
    this.state = { contextualMenuVisible: false };
  }

  public render(): JSX.Element {
    //@ts-ignore
    const { item, onExpandItem, onRemoveItem, removeButtonAriaLabel, index, selected } = this.props;
    const itemId = getId();
    return (
      <div
        ref={this.persona}
        className={css(
          'ms-PickerPersona-container',
          styles.personaContainer,
          { ['is-selected ' + styles.personaContainerPersonaContainerIsSelected]: selected },
          { ['is-invalid ' + styles.personaContainerValidationError]: !item.isValid }
        )}
        data-is-focusable={true}
        data-is-sub-focuszone={true}
        data-selection-index={index}
        role={'listitem'}
        aria-labelledby={'selectedItemPersona-' + itemId}
      >
        <div hidden={!item.canExpand || onExpandItem === undefined}>
          <IconButton
            onClick={this._onClickIconButton(onExpandItem)}
            iconProps={{ iconName: 'Add', style: { fontSize: '14px' } }}
            className={css('ms-PickerItem-removeButton', styles.personaContainerExpandButton, styles.personaContainerActionButton)}
            ariaLabel={removeButtonAriaLabel}
          />
        </div>
        <div className={css(styles.personaContainerPersonaWrapper)}>
          <div className={css('ms-PickerItem-content', styles.personaContainerItemContent)} id={'selectedItemPersona-' + itemId}>
            <Persona
              {...item}
              onRenderCoin={this.props.renderPersonaCoin}
              onRenderPrimaryText={this.props.renderPrimaryText}
              size={PersonaSize.size32}
            />
          </div>
          <IconButton
            onClick={this._onClickIconButton(onRemoveItem)}
            iconProps={{ iconName: 'Cancel', style: { fontSize: '14px' } }}
            className={css('ms-PickerItem-removeButton', styles.personaContainerRemoveButton, styles.personaContainerActionButton)}
            ariaLabel={removeButtonAriaLabel}
          />
        </div>
      </div>
    );
  }

  private _onClickIconButton(action: (() => void) | undefined): (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void {
    return (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
      ev.stopPropagation();
      ev.preventDefault();
      if (action) {
        action();
      }
    };
  }
}
