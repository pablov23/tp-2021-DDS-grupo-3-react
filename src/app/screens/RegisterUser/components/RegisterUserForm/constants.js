import i18next from 'i18next';

import { FIELDS } from '../../constants';

export const FORM_FIELDS = [
  {
    name: FIELDS.NAME,
    label: i18next.t('RegisterUserForm:name')
  },
  {
    name: FIELDS.PASSWORD,
    label: i18next.t('RegisterUserForm:password'),
    type: 'password'
  },
  {
    name: FIELDS.PASSWORD_CONFIRMATION,
    label: i18next.t('RegisterUserForm:passwordConfirmation'),
    type: 'password'
  }
];

export const USER_TYPES = ['owner', 'rescuer'];

export const MOCK_ORGANIZATIONS = ['org1', 'org2'];
