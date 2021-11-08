import i18next from 'i18next';
import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import Header from '~components/Header';

import styles from './styles.module.scss';

const RescueViewWrapper = ({ children, className, contentClassName }) => (
  <div className={cn(className, styles.container)}>
    <div className={cn(styles.contentContainer, contentClassName)}>
      <Header
        title={i18next.t('RescueViewWrapper:title')}
        iconClassName={styles.rescueIcon}
        titleClassName={styles.rescueTitle}
      />
      {children}
    </div>
  </div>
);

RescueViewWrapper.propTypes = {
  className: string,
  contentClassName: string
};

export default RescueViewWrapper;
