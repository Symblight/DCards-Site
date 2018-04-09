import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Picture from 'ui/atoms/Picture';
import Post from 'ui/molecules/Post';
import ButtonWith from 'ui/molecules/ButtonWith';
import ShopImage from 'assets/images/shopping-bag.png';

import { Wrapper, PanelWrap, ButtonWrap, ImageWrap, DiscriptionWrap, NameCardWrap } from './index.styled';

class ShopArticle extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <Post button={<Link
          to={{
          pathname: `/shop/${data.name}`
        }}
        >
          <ButtonWith>Открыть</ButtonWith>
        </Link>
      }
        >
          <Picture src={data.picture} height={150} width={150} />
          <NameCardWrap>
            {data.name}
          </NameCardWrap>
          <DiscriptionWrap>
            {data.discription}
          </DiscriptionWrap>
        </Post>
      </Wrapper>
    );
  }
}

export default ShopArticle;
