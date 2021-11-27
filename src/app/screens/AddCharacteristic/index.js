import React from 'react';

import FormWrapper from '~app/components/FormWrapper';

import AddCharacteristicForm from './components/AddCharacteristicForm';
import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import { VALIDATION_SCHEMA } from './utils';

const AddCharacteristic = () => {
  // eslint-disable-next-line no-empty-function
  const handleSubmit = () => {
    // TODO: Add handleSubmit action
  };
  return (
    <div className={styles.container}>
      <FormWrapper
        initialValues={INITIAL_VALUES}
        form={AddCharacteristicForm}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
        formClassName="full-height"
      />
    </div>
  );
};

export default AddCharacteristic;
