import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import Home from '~screens/Home';
import { history } from '~redux/store';
import { ROUTES } from '~constants/routes';
import Login from '~app/screens/Login';
import { LOGIN_PROPS } from '~constants/login';
import { ROLES } from '~constants/users';
import RegisterPerson from '~app/screens/RegisterPerson';
import Delegations from '~app/screens/Delegations';

import styles from './styles.module.scss';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const AppRoutesContainer = () => (
  <ConnectedRouter history={history}>
    <div className={`column center middle ${styles.container} ${styles.containerAlgo}`}>
      <Suspense>
        <AuthenticatedRoute {...ROUTES.DELEGATIONS} component={Delegations} />
        <AuthenticatedRoute {...ROUTES.REGISTER_PERSON} component={RegisterPerson} />
        <AuthenticatedRoute
          {...ROUTES.LOGIN_USER}
          component={Login}
          componentProps={LOGIN_PROPS[ROLES.USER]}
        />
        <AuthenticatedRoute {...ROUTES.HOME} component={Home} exact />
      </Suspense>
    </div>
  </ConnectedRouter>
);

export default AppRoutesContainer;
