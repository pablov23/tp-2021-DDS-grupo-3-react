import { push } from 'connected-react-router';
import i18next from 'i18next';
import React from 'react';
import { useDispatch } from 'react-redux';

import FormWrapper from '~app/components/FormWrapper';
import { ROUTES } from '~constants/routes';

import UserDataForm from '../../components/UserDataForm';
import { INITIAL_VALUES, USER_FIELDS } from '../../components/UserDataForm/constants';
import { VALIDATION_SCHEMA } from '../../components/UserDataForm/utils';

import { STEP_NUMBER } from './constants';

function RegisterOwner() {
  const dispatch = useDispatch();
  const handleClick = () => {
    // eslint-disable-next-line no-console
    dispatch(push(ROUTES.EMERGENCY_CONTACT.path));
  };
  return (
    <FormWrapper
      form={UserDataForm}
      fields={USER_FIELDS}
      buttonText={i18next.t('UserDataForm:next')}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onClick={handleClick}
      stepNumber={STEP_NUMBER}
    />
  );
}

export default RegisterOwner;
