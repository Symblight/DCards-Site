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
        discription: "30 procent for barber",
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
