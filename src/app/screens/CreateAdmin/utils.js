import * as Yup from 'yup';

import { PASSWORD_VALIDATION, REQUIRED_STRING_VALIDATION } from '~constants/validations';

export const VALIDATION_SCHEMA = Yup.object().shape({
  password: PASSWORD_VALIDATION,
  user: REQUIRED_STRING_VALIDATION
});
