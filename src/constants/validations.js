import i18next from 'i18next';
import * as Yup from 'yup';

export const REQUIRED_STRING_VALIDATION = Yup.string().required(i18next.t('RegisterUserFormErrors:required'));
