import Input from '~app/components/Input';
import Select from '~app/components/Select';
import { PET_TYPES } from '~constants/pets';
import { mapOptions } from '~utils/select';

export const FORM_TARGET = 'GivePetDataForm';

export const PET_FIELDS_NAMES = {
  NAME: 'name',
  NICKNAME: 'nickname',
  PET_TYPE: 'petType'
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
    options: mapOptions(PET_TYPES, FORM_TARGET)
  }
];

export const INITIAL_VALUES = {
  [PET_FIELDS_NAMES.NAME]: '',
  [PET_FIELDS_NAMES.NICKNAME]: '',
  [PET_FIELDS_NAMES.PET_TYPE]: ''
};
