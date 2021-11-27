import * as Yup from 'yup';

import { REQUIRED_STRING_VALIDATION } from '~constants/validations';

import { PET_FIELDS_NAMES } from './constants';

export const MINIMUM_REQUIRED_SCHEMA = {
  [PET_FIELDS_NAMES.AGE]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.BADGE]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.DESCRIPTION]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.PET_TYPE]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.SEX]: REQUIRED_STRING_VALIDATION
};

export const MINIMUM_VALIDATION_SCHEMA = Yup.object().shape(MINIMUM_REQUIRED_SCHEMA);

export const VALIDATION_SCHEMA = Yup.object().shape({
  [PET_FIELDS_NAMES.NAME]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.NICKNAME]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.STATE]: REQUIRED_STRING_VALIDATION,
  ...MINIMUM_REQUIRED_SCHEMA
});
