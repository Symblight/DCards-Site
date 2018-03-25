import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Test from './ui/pages/TestPage';
import SignIn from './ui/pages/SignInPage';
import SignUp from './ui/pages/SignUpPage';
import NotFound from './ui/pages/404';

import Shop from './components/Shop';
import Shops from './components/Shops';
import Card from './components/Card';
import Account from './components/Account';
import Auth from './components/Auth';
import Main from './components/Main';

class rootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Shops} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route path="/main" component={Main} />
        <Route path="/shop/:name" component={Shop} />
        <Route path="/card/id=:idcard" component={Card} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default rootRouter;
