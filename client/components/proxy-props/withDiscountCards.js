import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchCardsUser } from 'components/Main/actions';

const LIST_DICSOUNTS = [
  {
    id: '123445',
    author: 'Parikmacher.by',
    logo: '',
    title: 'Parikmacher.by',
    barcode: '232f5guhg',
    front: {
      discription: 'Интернет магазин',
      createBy: '12.04.2018',
      footer: 'Дисконтная карта'
    },
    back: {
      discription: '100% скидка на все товары для мастеров',
      footer: 'Дисконтная карта'
    }
  }, {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  },
  {
    id: '',
    author: '',
    logo: '',
    title: '',
    barcode: '',
    front: {
      discription: '',
      createBy: '12.04.2018',
      footer: ''
    },
    back: {
      discription: '',
      footer: 'Дисконтная карта'
    }
  }
];

const mapDispatchToProps = (dispatch) => ({
  onGetCards: (data) => dispatch(fetchCardsUser(data))
});

const mapStateToProps = (state) => ({
  cards: state.reducerMain.cards
});

const withDiscountCards = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class DiscountCards extends PureComponent {

        componentWillMount = () => {
          const { onGetCards, cards } = this.props;

          if (onGetCards) {
            onGetCards(LIST_DICSOUNTS);
          }
        }

        render() {
          const { cards } = this.props;

          return (
            <Component data={cards} {...this.props} />
          );
        }
  }

  return DiscountCards;
};

export default withDiscountCards;
