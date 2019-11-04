import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from '../../styles';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authActions';

export const Header = ({ isAuthenticated, logoutUser, history }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/styles">Styles</Link>
      <Link to="/private">Private</Link>
      {isAuthenticated ? (
        <Button onClick={() => logoutUser(() => history.push('/'))}>
          Logout
        </Button>
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
