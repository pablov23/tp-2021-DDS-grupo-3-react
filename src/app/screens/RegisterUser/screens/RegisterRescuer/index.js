import i18next from 'i18next';
import React from 'react';
import { useHistory } from 'react-router';

import FormWrapper from '~app/components/FormWrapper';
import { ROUTES } from '~constants/routes';

import UserDataForm from '../../components/UserDataForm';
import { INITIAL_VALUES, USER_FIELDS } from '../../components/UserDataForm/constants';
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
      fields={USER_FIELDS}
      buttonText={i18next.t('UserDataForm:next')}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    />
  );
}

export default RegisterRescuer;
