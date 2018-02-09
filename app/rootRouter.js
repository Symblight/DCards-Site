import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Test from './ui/pages/TestPage';
import Auth from './components/Auth';
import SignIn from './ui/pages/SignInPage';
import SignUp from './ui/pages/SignUpPage';
import Main from './ui/pages/MainPage';
import NotFound from './ui/pages/404';

class rootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default rootRouter;