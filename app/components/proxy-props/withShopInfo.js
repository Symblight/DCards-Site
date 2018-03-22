import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ImageTEST from 'assets/images/coffe.png';
import { fetchShopInfo } from 'components/Shop/actions';

const INFO = {
  id: 1,
  name: 'Coffey Shop',
  discription: 'Кофе для людей',
  picture: ImageTEST
};

const mapStateToProps = (state) => ({
  shop: state.reducerShop.info
});

const mapDispatchToProps = (dispatch) => ({
  onGetShop: (id) => dispatch(fetchShopInfo(id))
});

const withShopInfo = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class ShopInfo extends PureComponent {

    componentWillMount() {
      const { onGetShop, match } = this.props;

      onGetShop(match.params.name);

    }

    render() {
      const { shop } = this.props;

      return (
        <Component {...this.props} data={shop} />
      );
    }
  }
  return ShopInfo;
};

export default withShopInfo;
