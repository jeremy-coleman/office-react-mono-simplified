import * as React from 'react';
import { css } from '@uifabric/utilities';
import { Persona, PersonaSize, IPersonaProps, PersonaPresence } from '../../../Persona';
import { IBasePickerSuggestionsProps, ISuggestionItemProps } from '../../../Pickers';

import * as styles from './PeoplePickerStyle'

//import * as stylesImport from '../PeoplePicker.scss';

export const SuggestionItemNormal: (persona: IPersonaProps, suggestionProps?: IBasePickerSuggestionsProps) => JSX.Element = (
  personaProps: IPersonaProps,
  suggestionItemProps?: ISuggestionItemProps<IPersonaProps>
) => {
  return (
    <div className={css('ms-PeoplePicker-personaContent', styles.peoplePickerPersonaContent)}>
      <Persona
        presence={personaProps.presence !== undefined ? personaProps.presence : PersonaPresence.none}
        size={PersonaSize.size40}
        className={css('ms-PeoplePicker-Persona', styles.peoplePickerPersona)}
        showSecondaryText={true}
        {...personaProps}
      />
    </div>
  );
};
