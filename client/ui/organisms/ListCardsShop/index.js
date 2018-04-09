import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Card from 'ui/molecules/Card';
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
      const { data, shop } = this.props;

      return (
        <Wrapper>
          {
          data ?
            <ListGrids
              items={data}
              countRow={COUNT_ITEMS_ROW}
              Item={Card}
              link={`/shop/${shop.name}/card`}
            /> : null
        }
        </Wrapper>
      );
    }
}

export default ListCardsShop;

