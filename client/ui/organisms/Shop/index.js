import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Picture from 'ui/atoms/Picture';
import ShopImage from 'assets/images/shopping-bag.png';

import { Wrapper, PanelWrap, ButtonWrap, ImageWrap, DiscriptionWrap, NameCardWrap } from './index.styled';

class ShopArticle extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <ImageWrap>
          <Picture src={data.picture} height={150} width={150} />
        </ImageWrap>
        <PanelWrap>
          <NameCardWrap>
            {data.name}
          </NameCardWrap>
          <DiscriptionWrap>
            {data.discription}
          </DiscriptionWrap>
          <Link to={{
            pathname: `/shop/${data.name}`
          }}
          >
            <ButtonWrap>Открыть</ButtonWrap>
          </Link>
        </PanelWrap>
      </Wrapper>
    );
  }
}

export default ShopArticle;
