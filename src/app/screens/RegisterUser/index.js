import React from 'react';

import FormWrapper from '~app/components/FormWrapper';

import RegisterUserForm from './components/RegisterUserForm';
import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import { VALIDATION_SCHEMA } from './utils';

const RegisterUser = () => {
  // eslint-disable-next-line no-empty-function
  const handleSubmit = () => {
    // TODO: Add handleSubmit action
  };
  return (
    <div className={styles.container}>
      <FormWrapper
        initialValues={INITIAL_VALUES}
        form={RegisterUserForm}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      />
    </div>
  );
};

export default RegisterUser;
