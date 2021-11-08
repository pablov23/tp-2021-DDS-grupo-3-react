import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import Input from '~app/components/Input';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

const LoginForm = ({ values, onChange, errors }) => (
  <div className="column full-width middle center m-bottom-4">
    {FIELDS.map(({ name, label, type }) => (
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
        className="full-width m-bottom-3"
      />
    ))}
    <Button type="submit" className={styles.button}>
      {i18next.t('Login:login')}
    </Button>
  </div>
);

LoginForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default LoginForm;
