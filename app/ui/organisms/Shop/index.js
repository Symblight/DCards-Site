import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Photo from 'ui/atoms/Photo';
import ShopImage from 'assets/images/shopping-bag.png';

import { Wrapper, ButtonWrap, ImageWrap } from './index.styled';

class ShopArticle extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <ImageWrap>
          <Photo src={ShopImage} height={160} width={380} />
        </ImageWrap>
        <ButtonWrap>Открыть</ButtonWrap>
      </Wrapper>
    );
  }
}

export default ShopArticle;
