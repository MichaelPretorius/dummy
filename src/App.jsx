import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyle } from './theme/globalStyles';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Private from './pages/Private';
import Header from './pages/Header';
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
            <Route exact path="/private" component={Private} />
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
