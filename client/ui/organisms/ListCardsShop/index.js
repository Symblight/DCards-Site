import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Card from 'ui/organisms/Card';
import ListGrids from 'ui/organisms/ListGrids';
import Button from 'ui/molecules/AddButton';
import withCardsShop from 'components/proxy-props/withCardsShop';

import { Wrapper, ListWrap, RowWrap, ButtonWrap } from './index.styled';

const COUNT_ITEMS_ROW = 3;

@withCardsShop
class ListCardsShop extends PureComponent {
    static displayName = 'ListCardsShop';

    static propTypes = {
      data: PropTypes.arrayOf(Array)
    };

    render() {
      const { data } = this.props;

      return (
        <Wrapper>
          {
          data ?
            <ListGrids
              items={data}
              countRow={COUNT_ITEMS_ROW}
              Item={Card}
              link="/shop/card"
            /> : null
        }
        </Wrapper>
      );
    }
}

export default ListCardsShop;

