import i18next from 'i18next';

export const FIELDS = [
  {
    name: 'user',
    label: i18next.t('Login:user')
  },
  {
    name: 'password',
    label: i18next.t('Login:password'),
    type: 'password'
  }
];
