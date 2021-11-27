import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';

import DataForm from '~app/components/DataForm';

import { FORM_TARGET } from './constants';

const RegisterPetDataForm = ({ target, ...props }) => <DataForm target={target || FORM_TARGET} {...props} />;

RegisterPetDataForm.propTypes = {
  buttonText: string,
  errors: shape,
  fields: arrayOf(shape()),
  stepNumber: string,
  target: string,
  values: shape,
  onChange: func,
  onClick: func
};

export default RegisterPetDataForm;
