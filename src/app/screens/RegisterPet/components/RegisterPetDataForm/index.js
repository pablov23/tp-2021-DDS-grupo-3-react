import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';

import DataForm from '~app/components/DataForm';

import { FORM_TARGET } from './constants';

const RegisterPetDataForm = props => <DataForm target={FORM_TARGET} {...props} />;

RegisterPetDataForm.propTypes = {
  buttonText: string,
  errors: shape,
  fields: arrayOf(shape()),
  stepNumber: string,
  values: shape,
  onChange: func,
  onClick: func
};

export default RegisterPetDataForm;
