import React from 'react';
import { string, bool } from 'prop-types';
import { useHistory, useLocation } from 'react-router';

import FormWrapper from '~app/components/FormWrapper';
import Header from '~app/components/Header';
import { ROUTES } from '~constants/routes';

import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import LoginForm from './components/LoginForm';
import Links from './components/Links';
import { VALIDATION_SCHEMA } from './utils';

function Login({ title, signUp }) {
  const location = useLocation();
  const history = useHistory();
  const handleSubmit = () => {
    // TODO: handle login
    history.push(location.state?.nextViewPath ? location.state.nextViewPath : ROUTES.HOME.path);
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
            <Links signUp={signUp} />
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  signUp: bool,
  title: string
};

export default Login;
