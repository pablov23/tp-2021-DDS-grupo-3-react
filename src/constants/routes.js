import { ROLES } from './users';

export const ROUTES = {
  HOME: {
    path: '/',
    basePath: '',
    exact: true,
    supportedRoles: [ROLES.USER]
  },
  LOGIN_USER: {
    path: '/login',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_PERSON: {
    path: '/register',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  DELEGATIONS: {
    path: '/delegations',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  }
};
