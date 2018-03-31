import React, { PureComponent } from 'react';

import withCard from 'components/proxy-props/withCard';
import Card from 'ui/pages/CardPage';

@withCard
class CardContainer extends PureComponent {
  render() {
    return (
      <Card />
    );
  }
}

export default CardContainer;
