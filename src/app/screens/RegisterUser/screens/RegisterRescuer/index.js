import React from 'react';
import { useHistory } from 'react-router';

import FormWrapper from '~app/components/FormWrapper';
import { ROUTES } from '~constants/routes';

import UserDataForm from '../../components/UserDataForm';
import { INITIAL_VALUES } from '../../components/UserDataForm/constants';
import { VALIDATION_SCHEMA } from '../../components/UserDataForm/utils';

function RegisterRescuer() {
  const history = useHistory();
  const handleSubmit = values => {
    // TODO: integration
    // eslint-disable-next-line no-console
    console.log(values);
    history.push(ROUTES.REGISTER_SUCCESS.path);
  };
  return (
    <FormWrapper
      form={UserDataForm}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    />
  );
}

export default RegisterRescuer;
