import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ModalCard from 'ui/organisms/ModalCard';

import Main from 'components/Main';
import CreateShop from 'ui/pages/CreateShopPage';

import Card from '../../components/Card';
import withSwitchModal from '../../components/proxy-props/withSwitchModal';
import withAuthorization from '../../components/proxy-props/withAuthorization';
import withAuthenticated from '../../components/proxy-props/withAuthenticated';

@withAuthorization
@withAuthenticated
@withSwitchModal
class MainRouter extends Component {
  render() {
    const { location, isModal, previousLocation } = this.props;

    return (
      <div>
        <Switch location={isModal ? previousLocation : location}>
          <Route exact path="/main" component={Main} />
          <Route path="/main/card/:idcard" component={Card} />
          <Route path="/main/create/shop" component={CreateShop} />
        </Switch>
        {isModal ? <Route path="/main/card/:idcard" component={ModalCard} /> : null}
      </div>
    );
  }
}

export default MainRouter;