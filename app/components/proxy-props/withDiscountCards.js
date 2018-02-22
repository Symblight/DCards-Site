import React, { PureComponent } from 'react';

const LIST_DICSOUNTS = [
    {
        id: "0",
        shop: "parikmacher",
        discription: "10 procent",
        procent: "10"
    },
    {
        id: "1",
        shop: "plastyline",
        discription: "10 procent",
        procent: "10"
    },
    {
        id: "2",
        shop: "parikmacher master",
        discription: "30 procent for barber fgfgfgfgfgfgfgf",
        procent: "30"
    },
    {
        id: "3",
        shop: "test",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от",
        procent: "10"
    },
    {
        id: "4",
        shop: "galaxy master",
        discription: "There is not great talent without great will power.",
        procent: "30"
    },
    {
        id: "5",
        shop: "parikmacher master",
        discription: "30 procent for barber fgfgfgfgfgfgfgf",
        procent: "30"
    },
    {
        id: "6",
        shop: "test",
        discription: "Все! Мы потратили много времени, но надеюсь, что вам это понравилось. Я считаю, что этот небольшой пример является от",
        procent: "10"
    },
    {
        id: "7",
        shop: "galaxy master",
        discription: "There is not great talent without great will power.",
        procent: "30"
    },
];

const withDiscountCards = (Component) => {
    class DiscountCards extends PureComponent {
        render() {
            return (
                <Component data = {LIST_DICSOUNTS} {...this.props} />
            );
        }
    }

    return DiscountCards;
}

export default withDiscountCards;
