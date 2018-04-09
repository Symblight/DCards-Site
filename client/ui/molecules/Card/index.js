import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CardSVG from 'assets/images/card.svg';
import Post from 'ui/molecules/Post';
import ButtonWith from 'ui/molecules/ButtonWith';

import {
  Wrapper,
  ImageWrap,
  NameCardWrap,
  PanelWrap,
  ButtonWrap,
  DiscriptionWrap
} from './index.styled';

class CardArticle extends PureComponent {
  render() {
    const { data, location, link } = this.props;

    return (
      <Wrapper {...this.props}>
        <Post button={
          <Link
            to={{
            pathname: `${link}/${data.id}`,
            state: { modal: true }
          }}
          >
            <ButtonWith>Открыть</ButtonWith>
          </Link>
          }
          >
          <CardSVG />
          <NameCardWrap>
            {data.shop}
          </NameCardWrap>
          <DiscriptionWrap>
            {data.discription}
          </DiscriptionWrap>
        </Post>
      </Wrapper>
    );
  }
}

export default CardArticle;
