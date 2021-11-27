import i18next from 'i18next';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Button from '~app/components/Button';
import RescueViewWrapper from '~app/components/RescueViewWrapper';
import Select from '~app/components/Select';
import { ROUTES } from '~constants/routes';
import { mapOptions } from '~utils/select';

import { MOCK_ORGANIZATIONS } from './constants';
import styles from './styles.module.scss';

function Organizations() {
  const [selectedOption, setSelectedOption] = useState();
  const history = useHistory();
  const handleRedirectToHome = () => history.push(ROUTES.HOME.path);
  const handleChange = e => setSelectedOption(e.value);
  return (
    <RescueViewWrapper>
      <Select
        label={i18next.t('Organizations:label')}
        options={mapOptions(MOCK_ORGANIZATIONS, 'Organizations')}
        customHandleChange={handleChange}
        value={selectedOption}
        labelClassName={styles.organizationLabel}
      />
      <Button onClick={handleRedirectToHome} disabled={!selectedOption}>
        {i18next.t('Organizations:next')}
      </Button>
    </RescueViewWrapper>
  );
}

export default Organizations;
