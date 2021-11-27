import { push } from 'connected-react-router';
import i18next from 'i18next';
import React from 'react';
import { useDispatch } from 'react-redux';

import FormWrapper from '~app/components/FormWrapper';
import { ROUTES } from '~constants/routes';

import GivePetDataForm from './components/GivePetDataForm';
import { INITIAL_VALUES, PET_FIELDS } from './components/GivePetDataForm/constants';
import { VALIDATION_SCHEMA } from './components/GivePetDataForm/utils';

function GivePetForAdoption() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    dispatch(push(ROUTES.EMERGENCY_CONTACT.path));
  };
  return (
    <FormWrapper
      form={GivePetDataForm}
      fields={PET_FIELDS}
      buttonText={i18next.t('UserDataForm:next')}
      onSubmit={handleSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
    />
  );
}

export default GivePetForAdoption;
