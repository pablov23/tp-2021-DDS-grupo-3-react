import React from 'react';
import { bool, shape, string } from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Helmet from '~app/components/Helmet';

const AuthenticatedRoute = ({ title, description, path, component: Component, componentProps, ...props }) => (
  <>
    <Helmet title={title} description={description} />
    <Route path={path} render={() => <Component {...componentProps} />} {...props} />
  </>
);

AuthenticatedRoute.propTypes = {
  path: string.isRequired,
  component: shape,
  componentProps: shape,
  description: string,
  publicRoute: bool,
  supportedRoles: shape,
  title: string
};

export default withRouter(AuthenticatedRoute);
