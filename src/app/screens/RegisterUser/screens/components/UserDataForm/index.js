import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import DatePicker from '~app/components/DatePicker';
import GenericInputList from '~app/components/GenericInputList';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import { NAME_FIELDS } from './constants';
import styles from './styles.module.scss';

const UserDataForm = ({ values, onChange, errors }) => (
  <RescueViewWrapper>
    <div className={styles.formContainer}>
      <GenericInputList data={NAME_FIELDS} values={values} errors={errors} handleChange={onChange} />
      <DatePicker />
      {/* TODO: agregar selects y otra lista de inputs */}
    </div>
    <Button type="submit" className={styles.button}>
      {i18next.t('UserDataForm:next')}
    </Button>
  </RescueViewWrapper>
);

UserDataForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default UserDataForm;
