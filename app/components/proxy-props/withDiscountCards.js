import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchCardsUser } from 'components/Main/actions';

const LIST_DICSOUNTS = [
    {
        id: "21",
        shop: "OZ",
        discription: "Книжный",
        procent: "30"
    },    {
        id: "22",
        shop: "Bufet",
        discription: "There is not great talent without great will power.",
        procent: "30"
    },
    {
        id: "23",
        shop: "Suchi",
        discription: "30 procent for barber fgfgfgfgfgfgfgf",
        procent: "30"
    },
    {
        id: "24",
        shop: "Pizza",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от",
        procent: "10"
    },
    {
        id: "25",
        shop: "Megogo",
        discription: "Книжный",
        procent: "30"
    },
    {
        id: "26",
        shop: "yes",
        discription: "30 procent for barber fgfgfgfgfgfgfgf",
        procent: "30"
    },
    {
        id: "27",
        shop: "xiaomi",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от",
        procent: "10"
    },
    {
        id: "28",
        shop: "apple",
        discription: "There is not great talent without great will power.",
        procent: "30"
    },
    {
        id: "29",
        shop: "Bar",
        discription: "30 procent for barber fgfgfgfgfgfgfgf",
        procent: "30"
    },
    {
        id: "30",
        shop: "Kino",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от",
        procent: "10"
    },
    {
        id: "31",
        shop: "OZ",
        discription: "Книжный",
        procent: "30"
    }
]

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCards: (data) => dispatch(fetchCardsUser(data))
    }
};

const mapStateToProps = (state) => {
    return {
        cards: state.reducerMain.cards
    }
};

const withDiscountCards = (Component) => {
    @connect(mapStateToProps, mapDispatchToProps)
    class DiscountCards extends PureComponent {

        componentWillMount = () => {
            const { onGetCards, cards } = this.props;

            if(onGetCards) {
                onGetCards(LIST_DICSOUNTS);
            }
        }

        render() {
            const { cards } = this.props;

            return (
                <Component data = {cards} {...this.props} />
            );
        }
    }

    return DiscountCards;
}

export default withDiscountCards;
