import { ROLES } from './users';

export const ROUTES = {
  LOGIN_USER: {
    path: '/login',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_USER: {
    path: '/register',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  CREATE_ADMIN: {
    path: '/create-admin',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  }
};
