import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import GenericFieldList from '~app/components/GenericFieldList';
import RescueViewWrapper from '~app/components/RescueViewWrapper';
import Select from '~app/components/Select';
import { mapOptions } from '~utils/select';

import { FIELDS } from '../../constants';

import { FORM_FIELDS, FORM_TARGET, MOCK_ORGANIZATIONS, USER_TYPES } from './constants';
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
      <Select
        name={FIELDS.USER_TYPE}
        options={mapOptions(USER_TYPES, FORM_TARGET)}
        label={i18next.t('RegisterUserForm:userType')}
        labelClassName={styles.registerLabel}
        value={values[FIELDS.USER_TYPE]}
        error={errors[FIELDS.USER_TYPE]}
        {...props}
      />
      <Select
        name={FIELDS.ORGANIZATION}
        options={mapOptions(MOCK_ORGANIZATIONS, FORM_TARGET)}
        label={i18next.t('RegisterUserForm:organization')}
        labelClassName={styles.registerLabel}
        value={values[FIELDS.ORGANIZATION]}
        error={errors[FIELDS.ORGANIZATION]}
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
