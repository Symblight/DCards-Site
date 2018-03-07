import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchShopsList } from 'components/Shops/actions';

const LIST_SHOPS= [
    {
        id: "21",
        shop: "OZ",
        discription: "Книжный"
    },   
    {
        id: "22",
        shop: "Bufet",
        discription: "There is not great talent without great will power."
    },
    {
        id: "23",
        shop: "Suchi",
        discription: "30 procent for barber fgfgfgfgfgfgfgf"
    },
    {
        id: "24",
        shop: "Pizza",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от"
    },
    {
        id: "25",
        shop: "Megogo",
        discription: "Книжный"
    },
    {
        id: "26",
        shop: "yes",
        discription: "30 procent for barber fgfgfgfgfgfgfgf"
    },
    {
        id: "27",
        shop: "xiaomi",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от"
    },
    {
        id: "28",
        shop: "apple",
        discription: "There is not great talent without great will power."
    },
    {
        id: "29",
        shop: "Bar",
        discription: "30 procent for barber fgfgfgfgfgfgfgf"
    },
    {
        id: "30",
        shop: "Kino",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от"
    },
    {
        id: "31",
        shop: "OZ",
        discription: "Книжный"
    }
];

const mapDispatchToProps = (dispatch) => {
    return {
        onGetShops: (data) => dispatch(fetchShopsList(data))
    }
};

const mapStateToProps = (state) => {
    return {
        shops: state.reducerShops.shops
    }
};

const withSearchShops = (Component) => {
    @connect(mapStateToProps, mapDispatchToProps)
    class Shops extends PureComponent {

        componentWillMount = () => {
            const { onGetShops } = this.props;

            if(onGetShops) {
                onGetShops(LIST_SHOPS);
            }
        }

        render() {
            const { shops } = this.props;

            return (
                <Component data = {shops} {...this.props} />
            );
        }
    }

    return Shops;
}

export default withSearchShops;
