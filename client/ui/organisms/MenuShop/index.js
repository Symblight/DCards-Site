import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Picture from 'ui/atoms/Picture';
import ImageTEST from 'assets/images/coffe.png';

import { Wrapper, HeadWrap, Head } from './index.styled';

class MenuShop extends PureComponent {
    static propTypes = {

    };

    renderHead() {
      const { data } = this.props;

      return (
        <HeadWrap>
          <Head>
            <Picture src={ImageTEST} height={170} width={170} />
            <h3>data.name</h3>
          </Head>
          <span>Discription</span>
        </HeadWrap>
      );
    }

    render() {
      return (
        <Wrapper>
          {this.renderHead()}
            Menu
        </Wrapper>
      );
    }
}

export default MenuShop;