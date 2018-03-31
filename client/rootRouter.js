import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import SignIn from './ui/pages/SignInPage';
import SignUp from './ui/pages/SignUpPage';
import NotFound from './ui/pages/404';

import TestRouter from './routers/TestRouter';
import MainRouter from './routers/MainRouter';
import ShopRouter from './routers/ShopRouter';

import Shops from './components/Shops';
import Card from './components/Card';
import Account from './components/Account';
import Auth from './components/Auth';
import Shop from './components/Shop';

import withAuthorization from './components/proxy-props/withAuthorization';
import withAuthenticated from './components/proxy-props/withAuthenticated';
import withGuest from './components/proxy-props/withGuest';

class rootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Shops} />
        <Route path="/shop" component={ShopRouter} />
        <Route path="/main" component={MainRouter} />
        <Route path="/test" component={TestRouter} />
        <Route path="/login" component={withGuest(SignIn)} />
        <Route path="/signup" component={withGuest(SignUp)} />
        <Route path="/account" component={withAuthorization(withAuthenticated(Account))} />
        <Route component={withAuthorization(NotFound)} />
      </Switch>
    );
  }
}

export default rootRouter;
