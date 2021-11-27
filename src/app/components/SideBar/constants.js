import { ROUTES } from '~constants/routes';

export const MENU_ITEMS = [
  {
    name: 'Encontré una mascota perdida',
    route: ROUTES.REGISTER_FOUND_PET
  },
  {
    name: 'Perdí mi mascota',
    route: ROUTES.REGISTER_LOST_PET
  },
  {
    name: 'Quiero dar en adopción',
    route: ROUTES.LOGIN_USER,
    nextViewRoute: ROUTES.REGISTER_PET_FOR_ADOPTION
  }
];
