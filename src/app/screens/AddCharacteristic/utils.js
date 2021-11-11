import * as Yup from 'yup';

import { REQUIRED_STRING_VALIDATION } from '~constants/validations';

export const VALIDATION_SCHEMA = Yup.object().shape({
  characteristic: REQUIRED_STRING_VALIDATION,
  characteristicType: REQUIRED_STRING_VALIDATION
});
