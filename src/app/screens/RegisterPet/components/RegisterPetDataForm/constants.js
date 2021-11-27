import Input from '~app/components/Input';
import Select from '~app/components/Select';
import TextArea from '~app/components/TextArea';
import { BADGE_OPTIONS, PETS_SEX, PETS_TYPES } from '~constants/pets';
import { mapOptions } from '~utils/select';

export const FORM_TARGET = 'RegisterPetDataForm';

export const PET_FIELDS_NAMES = {
  NAME: 'name',
  NICKNAME: 'nickname',
  PET_TYPE: 'petType',
  AGE: 'age',
  SEX: 'sex',
  DESCRIPTION: 'description',
  STATE: 'state',
  BADGE: 'badge'
};

export const PET_FIELDS = [
  {
    field: Input,
    name: PET_FIELDS_NAMES.NAME
  },
  {
    field: Input,
    name: PET_FIELDS_NAMES.NICKNAME
  },
  {
    field: Select,
    name: PET_FIELDS_NAMES.PET_TYPE,
    options: mapOptions(PETS_TYPES, FORM_TARGET)
  },
  {
    field: Input,
    name: PET_FIELDS_NAMES.AGE,
    type: 'number'
  },
  {
    field: Select,
    name: PET_FIELDS_NAMES.SEX,
    options: mapOptions(PETS_SEX, FORM_TARGET)
  },
  {
    field: TextArea,
    name: PET_FIELDS_NAMES.DESCRIPTION
  },
  {
    field: Input,
    name: PET_FIELDS_NAMES.STATE
  },
  {
    field: Select,
    name: PET_FIELDS_NAMES.BADGE,
    options: mapOptions(BADGE_OPTIONS, FORM_TARGET)
  }
];

export const INITIAL_VALUES = {
  [PET_FIELDS_NAMES.AGE]: '',
  [PET_FIELDS_NAMES.DESCRIPTION]: '',
  [PET_FIELDS_NAMES.NAME]: '',
  [PET_FIELDS_NAMES.NICKNAME]: '',
  [PET_FIELDS_NAMES.PET_TYPE]: '',
  [PET_FIELDS_NAMES.SEX]: ''
};
