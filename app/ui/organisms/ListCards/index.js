import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Card from 'ui/organisms/Card';
import ListGrids from 'ui/organisms/ListGrids';
import Button from 'ui/molecules/AddButton';
import _ from 'lodash';

import { Wrapper, ListWrap, RowWrap, ButtonWrap } from './index.styled';

const COUNT_ITEMS_ROW = 3;

@withDiscountCards
class ListCards extends PureComponent {
    static displayName = 'ListCards';

    static propTypes = {
      data: PropTypes.arrayOf(Array)
    };

    renderButton() {
      return (
        <ButtonWrap>
          <Button>Добавить карту</Button>
        </ButtonWrap>
      );
    }

    render() {
      const { data } = this.props;

      return (
        <Wrapper>
          <ListGrids
            items={data}
            countRow={COUNT_ITEMS_ROW}
            Item={Card}
          />
          {this.renderButton()}
        </Wrapper>
      );
    }
}

export default ListCards;

