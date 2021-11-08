import { string } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import RescueHeader from '~components/RescueHeader';

import styles from './styles.module.scss';

function RescueWrapper({ className, contentClassName, children }) {
  return (
    <div className={cn(styles.container, className)}>
      <RescueHeader />
      <div className={cn(styles.contentContainer, contentClassName)}>{children}</div>
    </div>
  );
}

RescueWrapper.propTypes = {
  className: string,
  contentClassName: string
};

export default RescueWrapper;
