import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../redux/auth/authSelectors';
import { NormalButton } from '../components/CustomButton';
import { logoutUser } from '../redux/auth/authActions';

const Header = ({ user, logoutUser, history }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>
      {user ? (
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
  user: selectCurrentUser(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Header)
);
