import { ReactComponent as supervisionsIcon } from '~assets/supervisions.svg';

export const MENU_ITEMS = [
  {
    name: 'Link 1',
    icon: supervisionsIcon
  },
  {
    name: 'Link 2',
    icon: supervisionsIcon
  },
  {
    name: 'Link 3',
    icon: supervisionsIcon
  },
  {
    name: 'Link 4',
    icon: supervisionsIcon
  },
  {
    name: 'Link 5',
    icon: supervisionsIcon,
    subMenus: [
      { name: 'Submenu 1', icon: supervisionsIcon },
      { name: 'Submenu 2', icon: supervisionsIcon },
      { name: 'Submenu 3', icon: supervisionsIcon }
    ]
  }
];

export const MODAL_CLOSE_TIMEOUT = 300;
