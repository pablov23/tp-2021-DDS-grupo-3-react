import React from 'react';
import { useHistory } from 'react-router';

import FormWrapper from '~app/components/FormWrapper';

import RegisterUserForm from './components/RegisterUserForm';
import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import { getNextViewPath, VALIDATION_SCHEMA } from './utils';

const RegisterUser = () => {
  const history = useHistory();
  const handleSubmit = values => {
    // TODO: save values
    history.push(getNextViewPath(values));
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
