import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import GenericFieldList from '~app/components/GenericFieldList';
import RescueStep from '~app/components/RescueStep';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import styles from './styles.module.scss';

const DataForm = ({ stepNumber, fields, buttonText, onClick, target, ...props }) => (
  <RescueViewWrapper className={styles.container}>
    <RescueStep stepNumber={stepNumber} />
    <div className={styles.formContainer}>
      <GenericFieldList data={fields} target={target} {...props} />
    </div>
    <Button type={onClick ? 'button' : 'submit'} className={styles.button} onClick={onClick}>
      {buttonText}
    </Button>
  </RescueViewWrapper>
);

DataForm.propTypes = {
  buttonText: string,
  errors: shape,
  fields: arrayOf(shape()),
  stepNumber: string,
  target: string,
  values: shape,
  onChange: func,
  onClick: func
};

export default DataForm;
