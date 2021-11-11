import * as Yup from 'yup';

import { ROUTES } from '~constants/routes';
import { PASSWORD_VALIDATION, REQUIRED_STRING_VALIDATION } from '~constants/validations';

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: REQUIRED_STRING_VALIDATION,
  organization: REQUIRED_STRING_VALIDATION,
  password: PASSWORD_VALIDATION,
  passwordConfirmation: PASSWORD_VALIDATION,
  userType: REQUIRED_STRING_VALIDATION
});

export const getNextViewPath = values =>
  values.userType === 'owner' ? ROUTES.REGISTER_OWNER.path : ROUTES.REGISTER_RESCUER.path;
