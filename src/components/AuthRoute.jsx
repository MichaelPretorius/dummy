import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectInitialFetch,
  selectIsAuthenticated,
} from '../redux/auth/authSelectors';

const AuthRoute = ({
  component: Component,
  initialFetch,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
        // eslint-disable-next-line prettier/prettier
      )
    }
  />
);

const mapStateToProps = state => ({
  initialFetch: selectInitialFetch(state),
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps)(AuthRoute);
