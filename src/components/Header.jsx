import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectIsAuthenticated } from '../redux/auth/authSelectors';
import { NormalButton } from './CustomButton';
import { logoutUser } from '../redux/auth/authActions';

const Header = ({ isAuthenticated, logoutUser, history }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>
      {isAuthenticated ? (
        <NormalButton onClick={() => logoutUser(() => history.push('/'))}>
          Logout
        </NormalButton>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Header)
);
