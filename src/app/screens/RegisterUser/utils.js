import * as Yup from 'yup';

import { ROUTES } from '~constants/routes';
import { PASSWORD_SCHEMA_CONFIRMATION, REQUIRED_STRING_VALIDATION } from '~constants/validations';

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: REQUIRED_STRING_VALIDATION,
  password: PASSWORD_SCHEMA_CONFIRMATION,
  passwordConfirmation: PASSWORD_SCHEMA_CONFIRMATION,
  userType: REQUIRED_STRING_VALIDATION
});

export const getNextViewPath = values =>
  values.userType === 'owner' ? ROUTES.REGISTER_OWNER.path : ROUTES.REGISTER_RESCUER.path;
