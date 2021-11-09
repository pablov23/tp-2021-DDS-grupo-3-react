import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '~redux/store';
import { ROUTES } from '~constants/routes';
import Login from '~screens/Login';
import { LOGIN_PROPS } from '~constants/login';
import { ROLES } from '~constants/users';
import RegisterUser from '~app/screens/RegisterUser';
import CreateAdmin from '~app/screens/CreateAdmin';
import HomeAdmin from '~app/screens/HomeAdmin';
import LoginAdmin from '~app/screens/LoginAdmin';
import RegisterOwner from '~app/screens/RegisterUser/screens/RegisterOwner';

import styles from './styles.module.scss';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const AppRoutesContainer = () => (
  <ConnectedRouter history={history}>
    <div className={`column center middle ${styles.container}`}>
      <Suspense>
        <AuthenticatedRoute {...ROUTES.REGISTER_OWNER} component={RegisterOwner} />
        <AuthenticatedRoute {...ROUTES.CREATE_ADMIN} component={CreateAdmin} />
        <AuthenticatedRoute {...ROUTES.HOME_ADMIN} component={HomeAdmin} />
        <AuthenticatedRoute {...ROUTES.REGISTER_USER} component={RegisterUser} />
        <AuthenticatedRoute
          {...ROUTES.LOGIN_ADMIN}
          component={LoginAdmin}
          componentProps={LOGIN_PROPS[ROLES.ADMIN]}
        />
        <AuthenticatedRoute
          {...ROUTES.LOGIN_USER}
          component={Login}
          componentProps={LOGIN_PROPS[ROLES.USER]}
        />
      </Suspense>
    </div>
  </ConnectedRouter>
);

export default AppRoutesContainer;
