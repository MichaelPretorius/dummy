import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectIsAuthenticated } from '../../redux/auth/authSelectors';

export const AuthRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={
      props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      // eslint-disable-next-line react/jsx-curly-newline
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps)(AuthRoute);
