import * as React from 'react';
import { css, getId } from '@uifabric/utilities';
import { Persona, PersonaSize, PersonaPresence } from '../../../Persona';
import { IPeoplePickerItemProps } from '../../../ExtendedPicker';
import { IconButton } from '../../../Button';


import * as styles from './PickerItemsDefaultStyle';


export const SelectedItemDefault: (props: IPeoplePickerItemProps) => JSX.Element = (peoplePickerItemProps: IPeoplePickerItemProps) => {
  const { item, onRemoveItem, index, selected, removeButtonAriaLabel } = peoplePickerItemProps;

  const itemId = getId();
  const onClickIconButton = (removeItem: (() => void) | undefined): (() => void) => {
    return (): void => {
      if (removeItem) {
        removeItem();
      }
    };
  };

  return (
    <div
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
      <div className={css('ms-PickerItem-content', styles.personaContainerItemContent)} id={'selectedItemPersona-' + itemId}>
        <Persona {...item} presence={item.presence !== undefined ? item.presence : PersonaPresence.none} size={PersonaSize.size28} />
      </div>
      <IconButton
        onClick={onClickIconButton(onRemoveItem)}
        iconProps={{ iconName: 'Cancel', style: { fontSize: '12px' } }}
        className={css('ms-PickerItem-removeButton', styles.personaContainerRemoveButton)}
        ariaLabel={removeButtonAriaLabel}
      />
    </div>
  );
};
