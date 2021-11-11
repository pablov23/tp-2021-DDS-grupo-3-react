import i18next from 'i18next';
import { number } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const RescueStep = ({ stepNumber }) => (
  <div className={styles.rescueStep}>{i18next.t('RescueStep:title', { stepNumber })}</div>
);

RescueStep.propTypes = {
  stepNumber: number
};

export default RescueStep;
