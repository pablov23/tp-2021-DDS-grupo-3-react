import { ROLES } from './users';

export const ROUTES = {
  ORGANIZATIONS: {
    path: '/',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: true
  },
  HOME: {
    path: '/home',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: true
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
  },
  CONTACT_OWNER: {
    path: '/contact',
    basePath: '/',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  EMERGENCY_CONTACT: {
    path: '/register/emergency-contact',
    basePath: '/',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  PET_CARD: {
    path: '/pets/info/:id',
    basePath: '/pets',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_PET_FOR_ADOPTION: {
    path: '/pets/register/for-adoption',
    basePath: '/pets',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_LOST_PET: {
    path: '/pets/register/lost',
    basePath: '/pets',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  },
  REGISTER_FOUND_PET: {
    path: '/pets/register/found',
    basePath: '/pets',
    publicRoute: true,
    supportedRoles: [ROLES.USER],
    exact: false
  }
};
