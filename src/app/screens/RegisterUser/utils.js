import * as Yup from 'yup';

import { PASSWORD_VALIDATION, REQUIRED_STRING_VALIDATION } from '~constants/validations';

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: REQUIRED_STRING_VALIDATION,
  organization: REQUIRED_STRING_VALIDATION,
  password: PASSWORD_VALIDATION,
  passwordConfirmation: PASSWORD_VALIDATION,
  userType: REQUIRED_STRING_VALIDATION
});
