import { ROUTES } from '~constants/routes';

export const getNextViewPath = values =>
  values.badge === 'yes' ? ROUTES.CONTACT_OWNER.path : ROUTES.PUBLICATION_SUCCESS.path;
