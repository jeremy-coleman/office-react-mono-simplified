import { IChoiceGroupStyleProps, IChoiceGroupStyles } from './ChoiceGroup.types';
import { getGlobalClassNames } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-ChoiceFieldGroup',
  flexContainer: 'ms-ChoiceFieldGroup-flexContainer'
};

export const getStyles = (props: IChoiceGroupStyleProps): IChoiceGroupStyles => {
  const { className, optionsContainIconOrImage, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    applicationRole: className,
    root: [
      classNames.root,
      theme.fonts.small,
      {
        display: 'block'
      }
    ],
    flexContainer: [
      classNames.flexContainer,
      optionsContainIconOrImage && {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
    ]
  };
};
