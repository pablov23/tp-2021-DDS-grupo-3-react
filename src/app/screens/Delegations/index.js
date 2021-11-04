import React, { useState } from 'react';
import i18next from 'i18next';

import PersonWrapper from '~components/PersonWrapper';
import PersonNavigator from '~components/PersonNavigator';
import PersonContentWrapper from '~components/PersonContentWrapper';

import styles from './styles.module.scss';
import { DEFAULT_ITEM_OPTION, OPTIONS, VIEW_TARGET } from './constants';
import Authorize from './components/Authorize';

function Delegations() {
  const [currentItem, setCurrentItem] = useState(DEFAULT_ITEM_OPTION);
  const handleItemChange = id => () => setCurrentItem(id);
  return (
    <PersonWrapper subtitle={i18next.t('Delegations:subtitle')}>
      <div className={styles.container}>
        <div className={styles.navigatorContainer}>
          <PersonNavigator
            target={VIEW_TARGET}
            options={OPTIONS}
            currentItem={currentItem}
            handleItemChange={handleItemChange}
          />
        </div>
        <PersonContentWrapper>
          <Authorize currentItem={currentItem} />
        </PersonContentWrapper>
      </div>
    </PersonWrapper>
  );
}

export default Delegations;
