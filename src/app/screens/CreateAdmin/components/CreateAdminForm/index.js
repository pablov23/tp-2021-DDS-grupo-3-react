import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import Input from '~app/components/Input';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

const CreateAdminForm = ({ values, onChange, errors }) => (
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
    </div>
    <Button type="submit" className={styles.button}>
      {i18next.t('RescueCommon:save')}
    </Button>
  </RescueViewWrapper>
);

CreateAdminForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default CreateAdminForm;
