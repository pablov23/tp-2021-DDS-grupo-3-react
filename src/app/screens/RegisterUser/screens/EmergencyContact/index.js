import i18next from 'i18next';
import React from 'react';
import { useHistory } from 'react-router';

import FormWrapper from '~app/components/FormWrapper';
import { ROUTES } from '~constants/routes';

import UserDataForm from '../../components/UserDataForm';
import { EMERGENCY_CONTACT_FIELDS, INITIAL_VALUES } from '../../components/UserDataForm/constants';

import { STEP_NUMBER } from './constants';

function EmergencyContact() {
  const history = useHistory();
  const handleSubmit = values => {
    // TODO: integration
    // eslint-disable-next-line no-console
    console.log(values);
    history.push(ROUTES.REGISTER_SUCCESS.path);
  };

  // TODO: Change initial values and validation schema
  return (
    <FormWrapper
      form={UserDataForm}
      fields={EMERGENCY_CONTACT_FIELDS}
      buttonText={i18next.t('UserDataForm:finish')}
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      stepNumber={STEP_NUMBER}
    />
  );
}

export default EmergencyContact;
