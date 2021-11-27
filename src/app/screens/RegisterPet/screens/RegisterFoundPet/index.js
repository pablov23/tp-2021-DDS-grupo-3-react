import { push } from 'connected-react-router';
import i18next from 'i18next';
import React from 'react';
import { useDispatch } from 'react-redux';

import FormWrapper from '~app/components/FormWrapper';

import RegisterPetDataForm from '../../components/RegisterPetDataForm';
import { MINIMUM_INITIAL_VALUES, FOUND_PET_FIELDS } from '../../components/RegisterPetDataForm/constants';
import { MINIMUM_VALIDATION_SCHEMA } from '../../components/RegisterPetDataForm/utils';

import { getNextViewPath } from './utils';

function RegisterFoundPet() {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(push(getNextViewPath(values)));
  };
  return (
    <FormWrapper
      form={RegisterPetDataForm}
      fields={FOUND_PET_FIELDS}
      buttonText={i18next.t('RegisterPetDataForm:publish')}
      onSubmit={handleSubmit}
      initialValues={MINIMUM_INITIAL_VALUES}
      validationSchema={MINIMUM_VALIDATION_SCHEMA}
    />
  );
}

export default RegisterFoundPet;
