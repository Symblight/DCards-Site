import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Test from './ui/pages/TestPage';
import Main from './ui/pages/MainPage';

class rootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
      </Switch>
    );
  }
}

export default rootRouter;