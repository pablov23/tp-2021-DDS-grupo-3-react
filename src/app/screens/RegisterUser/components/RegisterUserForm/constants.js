import Select from '~components/Select';
import Input from '~components/Input';
import { mapOptions } from '~utils/select';

import { FIELDS } from '../../constants';

export const FORM_TARGET = 'RegisterUserForm';

export const USER_TYPES = ['owner', 'rescuer'];

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
  },
  {
    field: Select,
    name: FIELDS.USER_TYPE,
    options: mapOptions(USER_TYPES, FORM_TARGET)
  }
];
