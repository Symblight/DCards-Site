import React, { PureComponent } from 'react';

import withAuthenticated from 'components/proxy-props/withAuthenticated';
import withCard from 'components/proxy-props/withCard';
import Card from 'ui/pages/CardPage';

@withAuthenticated
@withCard
class CardContainer extends PureComponent {
    render() {
        return (
            <Card />
        );
    }
}

export default CardContainer;