import Select from '~components/Select';
import Input from '~components/Input';
import { mapOptions } from '~utils/select';

export const FORM_TARGET = 'UserDataForm';

export const USER_FIELDS_NAMES = {
  NAME: 'name',
  LASTNAME: 'lastName',
  DATE_OF_BIRTH: 'dateOfBirth',
  ID_TYPE: 'idType',
  ID_NUMBER: 'idNumber',
  EMAIL: 'email',
  PHONE: 'phone',
  NOTIFICATION_METHOD: 'notificationMethod',
  FAVOURITE_CONTACT: 'favouriteContact'
};

export const ID_TYPES = ['nationalId', 'passport'];

export const NOTIFICATION_METHODS = ['whatsapp', 'email', 'textMessage'];

export const YES_NO = ['yes', 'no'];

export const USER_FIELDS = [
  {
    field: Input,
    name: USER_FIELDS_NAMES.NAME
  },
  {
    field: Input,
    name: USER_FIELDS_NAMES.LASTNAME
  },
  {
    field: Input,
    name: USER_FIELDS_NAMES.DATE_OF_BIRTH,
    type: 'date'
  },
  {
    field: Select,
    name: USER_FIELDS_NAMES.ID_TYPE,
    options: mapOptions(ID_TYPES, FORM_TARGET)
  },
  {
    field: Input,
    name: USER_FIELDS_NAMES.ID_NUMBER
  },
  {
    field: Select,
    name: USER_FIELDS_NAMES.NOTIFICATION_METHOD,
    options: mapOptions(NOTIFICATION_METHODS, FORM_TARGET)
  },
  {
    field: Input,
    name: USER_FIELDS_NAMES.EMAIL
  },
  {
    field: Input,
    name: USER_FIELDS_NAMES.PHONE,
    type: 'phone'
  }
];

const NOT_INCLUDED_EMERGENCY = [
  USER_FIELDS_NAMES.EMAIL,
  USER_FIELDS_NAMES.ID_TYPE,
  USER_FIELDS_NAMES.ID_NUMBER,
  USER_FIELDS_NAMES.DATE_OF_BIRTH
];

export const EMERGENCY_CONTACT_FIELDS = [
  ...USER_FIELDS.filter(({ name }) => !NOT_INCLUDED_EMERGENCY.includes(name)),
  {
    field: Select,
    name: USER_FIELDS_NAMES.FAVOURITE_CONTACT,
    options: mapOptions(YES_NO, FORM_TARGET)
  }
];

export const INITIAL_VALUES = {
  [USER_FIELDS_NAMES.NAME]: '',
  [USER_FIELDS_NAMES.LASTNAME]: '',
  [USER_FIELDS_NAMES.DATE_OF_BIRTH]: '',
  [USER_FIELDS_NAMES.ID_TYPE]: '',
  [USER_FIELDS_NAMES.ID_NUMBER]: '',
  [USER_FIELDS_NAMES.EMAIL]: '',
  [USER_FIELDS_NAMES.PHONE]: '',
  [USER_FIELDS_NAMES.NOTIFICATION_METHOD]: ''
};
