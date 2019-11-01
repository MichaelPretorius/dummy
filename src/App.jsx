import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home/Home';
import Private from './pages/PrivatePage/Private';
import Styles from './pages/Styles/Styles';
import NotFound from './pages/NotFound/NotFound';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { GlobalStyle } from './styles/globalStyles';
import { selectInitialFetch } from './redux/auth/authSelectors';

const theme = {
  primaryColor: '#33D422',
  secondaryColor: '#31662B',
  accentColor: '#1EFE07',
  grayScaleColor: '#4d4d4d',
};

export const App = ({ initialFetch }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {initialFetch ? (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            {/* REMEMBER TO DELETE THIS PATH AND THE STYLE PAGE! */}
            <Route exact path="/styles" component={Styles} />
            <AuthRoute exact path="/private" component={Private} />
            <Route path="*" component={NotFound} />
          </Switch>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  initialFetch: selectInitialFetch(state),
});

export default connect(mapStateToProps)(App);
