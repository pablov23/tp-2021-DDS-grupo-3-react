import i18next from 'i18next';
import { func, shape, string } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import GenericFieldList from '~app/components/GenericFieldList';
import RescueStep from '~app/components/RescueStep';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import { FORM_TARGET, USER_FIELDS } from './constants';
import styles from './styles.module.scss';

const UserDataForm = ({ stepNumber, ...props }) => (
  <RescueViewWrapper className={styles.container}>
    <RescueStep stepNumber={stepNumber} />
    <div className={styles.formContainer}>
      <GenericFieldList data={USER_FIELDS} target={FORM_TARGET} {...props} />
    </div>
    <Button type="submit" className={styles.button}>
      {i18next.t('UserDataForm:next')}
    </Button>
  </RescueViewWrapper>
);

UserDataForm.propTypes = {
  errors: shape,
  stepNumber: string,
  values: shape,
  onChange: func
};

export default UserDataForm;
