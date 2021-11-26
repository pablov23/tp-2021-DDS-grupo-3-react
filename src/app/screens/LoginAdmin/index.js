import React from 'react';
import { string } from 'prop-types';
import { useHistory } from 'react-router';

import FormWrapper from '~app/components/FormWrapper';
import Header from '~app/components/Header';
import { ROUTES } from '~constants/routes';

import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import LoginForm from './components/LoginForm';
import { VALIDATION_SCHEMA } from './utils';

function LoginAdmin({ title }) {
  const history = useHistory();
  const handleSubmit = () => {
    history.push(ROUTES.HOME_ADMIN.path);
  };
  return (
    <div className={`row full-width full-height center middle space-between ${styles.container}`}>
      <div className="column full-width full-height center middle">
        <div className={`column full-width center ${styles.loginContainer}`}>
          <Header title={title} redirectToHome />
          <div className={`column full-width center ${styles.loginFormContainer}`}>
            <FormWrapper
              form={LoginForm}
              initialValues={INITIAL_VALUES}
              onSubmit={handleSubmit}
              validationSchema={VALIDATION_SCHEMA}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

LoginAdmin.propTypes = {
  title: string
};

export default LoginAdmin;
