import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Test from './ui/pages/TestPage';
import SignIn from './ui/pages/SignInPage';
import SignUp from './ui/pages/SignUpPage';
import NotFound from './ui/pages/404';
import CreateShop from './ui/pages/CreateShopPage';

import Shop from './components/Shop';
import Shops from './components/Shops';
import Card from './components/Card';
import Account from './components/Account';
import Auth from './components/Auth';
import Main from './components/Main';

import withAuthorization from './components/proxy-props/withAuthorization';
import withAuthenticated from './components/proxy-props/withAuthenticated';
import withGuest from './components/proxy-props/withGuest';

class rootRouter extends Component {
  render() {
    return (
      <Switch {...this.props}>
        <Route exact path="/" component={withAuthorization(Shops)} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={withGuest(SignIn)} />
        <Route path="/signup" component={withGuest(SignUp)} />
        <Route path="/account" component={withAuthorization(withAuthenticated(Account))} />
        <Route path="/main" component={withAuthorization(withAuthenticated(Main))} />
        <Route path="/shop/:name" component={withAuthorization(Shop)} />
        <Route path="/create/shop" component={withAuthorization(withAuthenticated(CreateShop))} />
        <Route path="/card/id=:idcard" component={withAuthorization(Card)} />
        <Route component={withAuthorization(NotFound)} />
      </Switch>
    );
  }
}

export default rootRouter;
