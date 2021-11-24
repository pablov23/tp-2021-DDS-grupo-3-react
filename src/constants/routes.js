import { ROLES } from './users';

export const ROUTES = {
  HOME: {
    path: '/',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  LOGIN_USER: {
    path: '/login',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_USER: {
    path: '/register/user',
    basePath: '/register',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_OWNER: {
    path: '/register/owner',
    basePath: '/register',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_RESCUER: {
    path: '/register/rescuer',
    basePath: '/register',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  LOGIN_ADMIN: {
    path: '/admin/login',
    basePath: '/admin',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  HOME_ADMIN: {
    path: '/admin/home',
    basePath: '/admin',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  CREATE_ADMIN: {
    path: '/admin/create',
    basePath: '/admin',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  ADD_CHARACTERISTIC: {
    path: '/admin/characteristic/create',
    basePath: '/admin/characteristic',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_SUCCESS: {
    path: '/register/success',
    basePath: '/register',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  PUBLICATION_SUCCESS: {
    path: '/publication/success',
    basePath: '/publication',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  }
};
