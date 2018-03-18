import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ListGrids from 'ui/organisms/ListGrids';
import Button from 'ui/molecules/AddButton';

import { Wrapper, ButtonWrap } from './index.styled';

class ListShops extends PureComponent {
    static displayName = 'ListShops';

    static propTypes = {
      data: PropTypes.arrayOf(Array)
    };

    renderButton() {
      return (
        <ButtonWrap>
          <Button>Создать магазин</Button>
        </ButtonWrap>
      );
    }

    render() {
      const { data } = this.props;

      return (
        <Wrapper>
          {
                data ? <ListGrids /> : null
          }
          {this.renderButton()}
        </Wrapper>
      );
    }
}
export default ListShops;
