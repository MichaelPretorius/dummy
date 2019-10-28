import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Private from './pages/PrivatePage/Private';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { GlobalStyle } from './theme/globalStyles';
import { selectInitialFetch } from './redux/auth/authSelectors';

function App({ initialFetch }) {
  return (
    <>
      <GlobalStyle />
      {initialFetch ? (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <AuthRoute exact path="/private" component={Private} />
          </Switch>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  initialFetch: selectInitialFetch(state),
});

export default connect(mapStateToProps)(App);
