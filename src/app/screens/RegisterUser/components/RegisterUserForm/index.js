import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import Input from '~app/components/Input';
import RescueViewWrapper from '~app/components/RescueViewWrapper';
import Select from '~app/components/Select';
import { mapOptions } from '~utils/select';

import { FIELDS } from '../../constants';

import { FORM_FIELDS, MOCK_ORGANIZATIONS, USER_TYPES } from './constants';
import styles from './styles.module.scss';

const RegisterUserForm = ({ values, onChange, errors, ...props }) => (
  <RescueViewWrapper>
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
        />
      ))}
      <Select
        name={FIELDS.USER_TYPE}
        options={mapOptions(USER_TYPES, 'RegisterUserForm')}
        label={i18next.t('RegisterUserForm:userType')}
        labelClassName={styles.registerLabel}
        value={values[FIELDS.USER_TYPE]}
        error={errors[FIELDS.USER_TYPE]}
        {...props}
      />
      <Select
        name={FIELDS.ORGANIZATION}
        options={mapOptions(MOCK_ORGANIZATIONS, 'RegisterUserForm')}
        label={i18next.t('RegisterUserForm:organization')}
        labelClassName={styles.registerLabel}
        value={values[FIELDS.ORGANIZATION]}
        error={errors[FIELDS.ORGANIZATION]}
        {...props}
      />
    </div>
    <Button type="submit" className={`full-width m-top-4 ${styles.button}`}>
      {i18next.t('RegisterUserForm:register')}
    </Button>
  </RescueViewWrapper>
);

RegisterUserForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default RegisterUserForm;
