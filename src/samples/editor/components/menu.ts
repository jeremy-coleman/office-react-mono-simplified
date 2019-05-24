import { IContextualMenuItem } from 'office-ui-fabric-react';

export const menuItems: IContextualMenuItem[] = [
  {
    key: 'example-menu-root',
    name: 'Examples',
    onClick: () => console.log('clicked'),
    split: true,
    subMenuProps: {
      items: [
        {
          key: 'copy',
          name: 'Copy',
          iconProps: { iconName: 'Copy' },
          onClick: () => console.log('clicked')
        }
      ]
    }
  }
];
