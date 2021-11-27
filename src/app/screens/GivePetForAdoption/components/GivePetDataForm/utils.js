import * as Yup from 'yup';

import { REQUIRED_STRING_VALIDATION } from '~constants/validations';

import { PET_FIELDS_NAMES } from './constants';

export const VALIDATION_SCHEMA = Yup.object().shape({
  [PET_FIELDS_NAMES.NAME]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.NICKNAME]: REQUIRED_STRING_VALIDATION,
  [PET_FIELDS_NAMES.PET_TYPE]: REQUIRED_STRING_VALIDATION
});
