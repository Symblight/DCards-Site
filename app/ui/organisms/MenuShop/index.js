import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Menu from 'ui/molecules/Menu';

import { Wrapper, HeadWrap, Head } from './index.styled';

class MenuShop extends PureComponent {
    static propTypes = {

    };

    renderHead() {
      return (
        <HeadWrap>
          <Head>
            Image
            <h3>Title</h3>
          </Head>
          <span>Discription</span>
        </HeadWrap>
      );
    }

    render() {
      return (
        <Menu>
          <Wrapper>
            {this.renderHead()}
            Menu
          </Wrapper>
        </Menu>
      );
    }
}

export default MenuShop;