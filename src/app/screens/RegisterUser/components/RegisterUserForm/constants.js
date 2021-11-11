import Input from '~components/Input';

import { FIELDS } from '../../constants';

export const FORM_TARGET = 'RegisterUserForm';

export const FORM_FIELDS = [
  {
    field: Input,
    name: FIELDS.NAME
  },
  {
    field: Input,
    name: FIELDS.PASSWORD,
    type: 'password'
  },
  {
    field: Input,
    name: FIELDS.PASSWORD_CONFIRMATION,
    type: 'password'
  }
];

export const USER_TYPES = ['owner', 'rescuer'];

export const MOCK_ORGANIZATIONS = ['org1', 'org2'];
