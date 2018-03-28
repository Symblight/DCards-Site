import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchShopCards } from '../Shop/actions';

const LIST_DICSOUNTS = [
  {
    id: '21',
    shop: 'OZ',
    discription: 'Книжный',
    procent: '30'
  }, {
    id: '22',
    shop: 'OZ',
    discription: 'There is not',
    procent: '30'
  },
  {
    id: '23',
    shop: 'OZ',
    discription: '30 procent ',
    procent: '30'
  },
  {
    id: '24',
    shop: 'OZ',
    discription: 'Все! Мы потрмер является от',
    procent: '10'
  },
  {
    id: '25',
    shop: 'OZ',
    discription: 'Книжный',
    procent: '30'
  },
  {
    id: '26',
    shop: 'OZ',
    discription: '30 ',
    procent: '30'
  }
];

const mapStateToProps = (state) => ({
  cards: state.reducerShop.cards
});

const mapDispatchToProps = (dispatch) => ({
  onShopCards: (id) => dispatch(fetchShopCards(id))
});

const withCardsShop = Component => {
  @connect(mapStateToProps, mapDispatchToProps)
  class CardsShop extends PureComponent {
    componentWillMount() {
      const { onShopCards, match } = this.props;

      if (onShopCards) {
        onShopCards(LIST_DICSOUNTS);
      }
    }
    render() {
      const { cards } = this.props;

      return (
        <Component data={cards} {...this.props} />
      );
    }
  }
  return CardsShop;
};

export default withCardsShop;