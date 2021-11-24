import i18next from 'i18next';
import { number } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const RescueStep = ({ stepNumber }) =>
  stepNumber ? (
    <div className={styles.rescueStep}>{i18next.t('RescueStep:title', { stepNumber })}</div>
  ) : null;

RescueStep.propTypes = {
  stepNumber: number
};

export default RescueStep;
