import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ModalCard from 'ui/organisms/ModalCard';

import Test from 'ui/pages/TestPage';
import Card from '../../components/Card';
import withSwitchModal from '../../components/proxy-props/withSwitchModal';

@withSwitchModal
class TestRouter extends Component {

  render() {
    const { location, isModal, previousLocation } = this.props;

    return (
      <div>
        <Switch location={isModal ? previousLocation : location}>
          <Route path="/test/card" component={Card} />
          <Route exact path="/test" component={Test} />
          <Route path="/test/testcards/:card" component={Card} />
        </Switch>
        {isModal ? <Route path="/test/testcards/:card" component={ModalCard} /> : null}
      </div>
    );
  }
}

export default TestRouter;