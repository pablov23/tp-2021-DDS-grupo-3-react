import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import GenericFieldList from '~app/components/GenericFieldList';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import { FORM_FIELDS, FORM_TARGET } from './constants';
import styles from './styles.module.scss';

const RegisterUserForm = ({ values, onChange, errors, ...props }) => (
  <RescueViewWrapper>
    <div className={styles.formContainer}>
      <GenericFieldList
        data={FORM_FIELDS}
        values={values}
        errors={errors}
        handleChange={onChange}
        labelClassName={styles.registerLabel}
        target={FORM_TARGET}
        {...props}
      />
    </div>
    <Button type="submit" className={styles.button}>
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
