import i18next from 'i18next';

import { FIELDS } from '../../constants';

export const FORM_FIELDS = [
  {
    name: FIELDS.USER,
    label: i18next.t('RescueCommon:user')
  },
  {
    name: FIELDS.PASSWORD,
    label: i18next.t('RescueCommon:password'),
    type: 'password'
  }
];
