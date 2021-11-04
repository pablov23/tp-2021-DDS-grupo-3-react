import i18next from 'i18next';
import * as Yup from 'yup';

export const VALIDATION_SCHEMA = Yup.object().shape({
  password: Yup.string().required(i18next.t('LoginFormErrors:required')),
  user: Yup.string().required(i18next.t('LoginFormErrors:required'))
});
