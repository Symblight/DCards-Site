import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ModalCard from 'ui/organisms/ModalCard';

import Main from 'components/Main';
import Shops from 'components/Shops';
import Shop from 'components/Shop';

import withSwitchModal from '../../components/proxy-props/withSwitchModal';

@withSwitchModal
class ShopsRouter extends Component {

  render() {
    const { location, isModal, previousLocation } = this.props;

    return (
      <div>
        <Switch location={isModal ? previousLocation : location}>
          <Route exact path="/" component={Shops} />
          <Route path="/shop/:name" component={Shop} />
        </Switch>
        {isModal ? <Route path="/main/card=:idcard" component={ModalCard} /> : null}
      </div>
    );
  }
}

export default ShopsRouter;