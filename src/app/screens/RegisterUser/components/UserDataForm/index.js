import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';

import DataForm from '~app/components/DataForm';

import { FORM_TARGET } from './constants';

const UserDataForm = props => <DataForm target={FORM_TARGET} {...props} />;

UserDataForm.propTypes = {
  buttonText: string,
  errors: shape,
  fields: arrayOf(shape()),
  stepNumber: string,
  values: shape,
  onChange: func,
  onClick: func
};

export default UserDataForm;
