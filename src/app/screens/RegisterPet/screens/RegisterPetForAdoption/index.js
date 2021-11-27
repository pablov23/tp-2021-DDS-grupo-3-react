import { push } from 'connected-react-router';
import i18next from 'i18next';
import React from 'react';
import { useDispatch } from 'react-redux';

import FormWrapper from '~app/components/FormWrapper';
import { ROUTES } from '~constants/routes';

import RegisterPetDataForm from '../../components/RegisterPetDataForm';
import { INITIAL_VALUES, PET_FIELDS } from '../../components/RegisterPetDataForm/constants';
import { VALIDATION_SCHEMA } from '../../components/RegisterPetDataForm/utils';

function RegisterPetForAdoption() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(push(ROUTES.PUBLICATION_SUCCESS.path));
  };
  return (
    <FormWrapper
      form={RegisterPetDataForm}
      fields={PET_FIELDS}
      buttonText={i18next.t('RegisterPetDataForm:publish')}
      onSubmit={handleSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
    />
  );
}

export default RegisterPetForAdoption;
