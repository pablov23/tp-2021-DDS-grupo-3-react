import i18next from 'i18next';

import AuthActions from '~redux/Auth/actions';

import { ROLES } from './users';

export const LOGIN_PROPS = {
  [ROLES.USER]: {
    title: i18next.t('LoginUser:welcome'),
    subtitle: i18next.t('LoginUser:welcome'),
    submitAction: (values, setCode) => AuthActions.signIn({ user: values, setCode }),
    signUp: true
  },
  [ROLES.ADMIN]: {
    title: i18next.t('LoginAdmin:welcome')
  }
};
