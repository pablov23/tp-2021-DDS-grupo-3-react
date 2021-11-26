import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import GenericFieldList from '~app/components/GenericFieldList';
import RescueStep from '~app/components/RescueStep';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import { FORM_TARGET } from './constants';
import styles from './styles.module.scss';

const UserDataForm = ({ stepNumber, fields, buttonText, onClick, ...props }) => (
  <RescueViewWrapper className={styles.container}>
    <RescueStep stepNumber={stepNumber} />
    <div className={styles.formContainer}>
      <GenericFieldList data={fields} target={FORM_TARGET} {...props} />
    </div>
    <Button type={onClick ? 'button' : 'submit'} className={styles.button} onClick={onClick}>
      {buttonText}
    </Button>
  </RescueViewWrapper>
);

UserDataForm.propTypes = {
  buttonText: string,
  errors: shape,
  fields: arrayOf(shape()),
  stepNumber: string,
  values: shape,
  onChange: func,
  onClick: func
};

export default UserDataForm;
