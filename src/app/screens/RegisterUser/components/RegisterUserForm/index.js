import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import Header from '~app/components/Header';
import Input from '~app/components/Input';
import Select from '~app/components/Select';
import { mapOptions } from '~utils/select';

import { FORM_FIELDS, USER_TYPES } from './constants';
import styles from './styles.module.scss';

const RegisterUserForm = ({ values, onChange, errors, ...props }) => (
  <div className={styles.container}>
    <Header
      title={i18next.t('RegisterUser:title')}
      iconClassName={styles.registerIcon}
      titleClassName={styles.registerTitle}
    />
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
          labelClassName={styles.registerLabel}
          className="full-width m-bottom-4"
          errorClassName={styles.error}
        />
      ))}
      <Select
        options={mapOptions(USER_TYPES, 'RegisterUserForm')}
        label={i18next.t('RegisterUserForm:userType')}
        labelClassName={styles.registerLabel}
        {...props}
      />
      <Select
        options={[]}
        label={i18next.t('RegisterUserForm:organization')}
        labelClassName={styles.registerLabel}
        {...props}
      />
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
