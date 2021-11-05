import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import Header from '~app/components/Header';
import Input from '~app/components/Input';

import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

const RegisterUserForm = ({ values, onChange, errors }) => (
  <div className={styles.container}>
    <Header title={i18next.t('RegisterUser:title')} titleClassName={styles.registerTitle} />
    <div className={styles.formContainer}>
      {FORM_FIELDS.map(({ name, label, type }) => (
        <Input
          key={name}
          value={values[name]}
          name={name}
          label={label}
          error={errors[name]}
          handleChange={onChange}
          type={type}
          inputClassName={styles.input}
          labelClassName={styles.inputLabel}
          className="full-width m-bottom-4"
          errorClassName={styles.error}
        />
      ))}
    </div>
    <Button type="submit" className={`full-width m-top-4 ${styles.button}`}>
      {i18next.t('RegisterUserForm:register')}
    </Button>
  </div>
);

RegisterUserForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default RegisterUserForm;
