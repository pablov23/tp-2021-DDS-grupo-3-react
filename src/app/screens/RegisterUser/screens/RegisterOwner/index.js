import React from 'react';

import FormWrapper from '~app/components/FormWrapper';

import UserDataForm from '../../components/UserDataForm';
import { INITIAL_VALUES } from '../../components/UserDataForm/constants';
import { VALIDATION_SCHEMA } from '../../components/UserDataForm/utils';

import { STEP_NUMBER } from './constants';

function RegisterOwner() {
  const handleSubmit = values => {
    // eslint-disable-next-line no-console
    console.log(values);
  };
  return (
    <FormWrapper
      form={UserDataForm}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
      stepNumber={STEP_NUMBER}
    />
  );
}

export default RegisterOwner;
