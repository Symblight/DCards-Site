import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
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
          <Link to="create/shop">
            <Button>Создать магазин</Button>
          </Link>
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
