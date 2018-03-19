import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ImageTEST from 'assets/images/coffe.png';

import { fetchShopsList } from 'components/Shops/actions';

const LIST_SHOPS = [
  {
    id: '21',
    name: 'OZ',
    picture: ImageTEST,
    discription: 'Книжный'
  },
  {
    id: '22',
    name: 'Bufet',
    picture: ImageTEST,
    discription: 'Буффет'
  },
  {
    id: '23',
    name: 'Suchi',
    picture: ImageTEST,
    discription: 'Суши!'
  },
  {
    id: '24',
    name: 'Pizza',
    picture: ImageTEST,
    discription: 'Пицца!'
  },
  {
    id: '25',
    name: 'Megogo',
    picture: ImageTEST,
    discription: 'Фильмы'
  },
  {
    id: '26',
    name: 'yes',
    picture: ImageTEST,
    discription: 'Курсы'
  },
  {
    id: '27',
    name: 'xiaomi',
    picture: ImageTEST,
    discription: 'Салон'
  },
  {
    id: '28',
    name: 'apple',
    picture: ImageTEST,
    discription: 'There is not great talent without great will power.'
  },
  {
    id: '29',
    name: 'Bar',
    picture: ImageTEST,
    discription: 'Бар'
  },
  {
    id: '30',
    name: 'Kino',
    picture: ImageTEST,
    discription: 'Фильмы'
  },
  {
    id: '31',
    name: 'OZ',
    picture: ImageTEST,
    discription: 'Книжный'
  }
];

const mapDispatchToProps = (dispatch) => ({
  onGetShops: (data) => dispatch(fetchShopsList(data))
});

const mapStateToProps = (state) => ({
  shops: state.reducerShops.shops
});

const withSearchShops = (Component) => {
    @connect(mapStateToProps, mapDispatchToProps)
  class Shops extends PureComponent {

        componentWillMount = () => {
          const { onGetShops } = this.props;

          if (onGetShops) {
            onGetShops(LIST_SHOPS);
          }
        }

        render() {
          const { shops } = this.props;

          return (
            <Component data={shops} {...this.props} />
          );
        }
    }

    return Shops;
};

export default withSearchShops;
