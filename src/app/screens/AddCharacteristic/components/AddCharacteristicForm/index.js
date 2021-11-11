import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';

import Button from '~app/components/Button';
import GenericFieldList from '~app/components/GenericFieldList';
import RescueViewWrapper from '~app/components/RescueViewWrapper';

import { CHARACTERISTIC_FIELDS, FORM_TARGET } from './constants';
import styles from './styles.module.scss';

const AddCharacteristicForm = props => (
  <RescueViewWrapper className={styles.container}>
    <div className={styles.formContainer}>
      <GenericFieldList data={CHARACTERISTIC_FIELDS} target={FORM_TARGET} {...props} />
    </div>
    <Button type="submit" className={styles.button}>
      {i18next.t('AddCharacteristicForm:save')}
    </Button>
  </RescueViewWrapper>
);

AddCharacteristicForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default AddCharacteristicForm;
