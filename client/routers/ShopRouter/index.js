import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ModalCard from 'ui/organisms/ModalCard';
import Main from 'components/Main';
import Shops from 'components/Shops';
import Shop from 'components/Shop';
import Card from 'components/Card';
import Admin from 'ui/pages/AdminShopPage';

import withSwitchModal from '../../components/proxy-props/withSwitchModal';
import withAuthorization from '../../components/proxy-props/withAuthorization';
import withAuthenticated from '../../components/proxy-props/withAuthenticated';

@withAuthorization
@withSwitchModal
class ShopRouter extends Component {

  render() {
    const { location, isModal, previousLocation } = this.props;

    return (
      <div>
        <Switch location={isModal ? previousLocation : location}>
          <Route exact path="/shop/:name" component={Shop} />
          <Route path="/shop/:shop/card/:name" component={Card} />
          <Route path="/shop/admin/:name" component={withAuthenticated(Admin)} />
        </Switch>
        {isModal ? <Route path="/shop/:shop/card/:name" component={ModalCard} /> : null}
      </div>
    );
  }
}

export default ShopRouter;