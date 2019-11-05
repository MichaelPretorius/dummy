import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectIsAuthenticated } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authActions';
import burger from '../../assets/navburger.png';
import {
  Button,
  NavContainer,
  Wrapper,
  Burger,
  NavBrand,
  Navbar,
  Navs,
  Nav,
} from '../../styles';

export const Header = ({ isAuthenticated, logoutUser, history }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <NavContainer row secondary>
      <Wrapper row>
        <Burger onClick={toggleNav} src={burger} />
        <NavBrand to="/">Home</NavBrand>
      </Wrapper>
      <Navbar showNav={showNav} width="200px">
        <Navs>
          <Nav to="/styles">Styles</Nav>
          <Nav to="/private">Private</Nav>
          {isAuthenticated ? (
            <Button onClick={() => logoutUser(() => history.push('/'))}>
              Logout
            </Button>
          ) : (
            <>
              <Nav to="/signup">Signup</Nav>
              <Nav to="/login">Login</Nav>
            </>
          )}
        </Navs>
      </Navbar>
    </NavContainer>
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
