import React from 'react';

import FormWrapper from '~app/components/FormWrapper';

import RegisterUserForm from './components/RegisterUserForm';
import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import { VALIDATION_SCHEMA } from './utils';

const RegisterUser = () => {
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <FormWrapper
        initialValues={INITIAL_VALUES}
        form={RegisterUserForm}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
        formClassName={styles.formContainer}
      />
    </div>
  );
};

export default RegisterUser;
