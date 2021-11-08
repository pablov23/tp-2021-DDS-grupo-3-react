import i18next from 'i18next';
import * as Yup from 'yup';

import { alphabeticCompare } from '~utils/string';

import { PASSWORD_REGEX } from './regex';

export const REQUIRED_STRING_VALIDATION = Yup.string().required(i18next.t('RegisterUserFormErrors:required'));

export const PASSWORD_VALIDATION = Yup.string()
  .required(i18next.t('RegisterUserFormErrors:required'))
  .min(8, i18next.t('RegisterUserFormErrors:passwordMinimumLength'))
  .matches(PASSWORD_REGEX, i18next.t('RegisterUserFormErrors:passwordStrength'))
  .test({
    name: 'passwordConfirmationValidation',
    message: i18next.t('RegisterUserFormErrors:passwordConfirmation'),
    test() {
      const { password, passwordConfirmation } = this.parent;
      return password && passwordConfirmation && alphabeticCompare(password, passwordConfirmation);
    }
  });
