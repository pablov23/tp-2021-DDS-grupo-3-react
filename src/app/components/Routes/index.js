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
import RegisterSuccess from '~app/screens/RegisterUser/screens/RegisterSuccess';
import RegisterOwner from '~app/screens/RegisterUser/screens/RegisterOwner';
import RegisterRescuer from '~app/screens/RegisterUser/screens/RegisterRescuer';
import AddCharacteristic from '~app/screens/AddCharacteristic';
import Home from '~app/screens/Home';
import PetCard from '~app/screens/PetCard';
import PublicationSuccess from '~app/screens/PublicationSuccess';
import ContactOwner from '~app/screens/ContactOwner';

import styles from './styles.module.scss';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const AppRoutesContainer = () => (
  <ConnectedRouter history={history}>
    <div className={styles.container}>
      <Suspense>
        <AuthenticatedRoute {...ROUTES.REGISTER_SUCCESS} component={RegisterSuccess} />
        <AuthenticatedRoute {...ROUTES.CONTACT_OWNER} component={ContactOwner} />
        <AuthenticatedRoute {...ROUTES.PUBLICATION_SUCCESS} component={PublicationSuccess} />
        <AuthenticatedRoute {...ROUTES.REGISTER_SUCCESS} component={RegisterSuccess} />
        <AuthenticatedRoute {...ROUTES.ADD_CHARACTERISTIC} component={AddCharacteristic} />
        <AuthenticatedRoute {...ROUTES.REGISTER_RESCUER} component={RegisterRescuer} />
        <AuthenticatedRoute {...ROUTES.REGISTER_OWNER} component={RegisterOwner} />
        <AuthenticatedRoute {...ROUTES.CREATE_ADMIN} component={CreateAdmin} />
        <AuthenticatedRoute {...ROUTES.HOME_ADMIN} component={HomeAdmin} />
        <AuthenticatedRoute {...ROUTES.REGISTER_USER} component={RegisterUser} />
        <AuthenticatedRoute {...ROUTES.HOME} component={Home} />
        <AuthenticatedRoute {...ROUTES.PET_CARD} component={PetCard} />
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
