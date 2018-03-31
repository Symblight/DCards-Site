import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CardSVG from 'assets/images/card.svg';

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
        <ImageWrap>
          <CardSVG height={160} width={380} />
        </ImageWrap>
        <PanelWrap>
          <NameCardWrap>
            {data.shop}
          </NameCardWrap>
          <DiscriptionWrap>
            {data.discription}
          </DiscriptionWrap>
          <Link
            to={{
            pathname: `${link}/${data.id}`,
            state: { modal: true }
          }}
          >
            <ButtonWrap>Показать код</ButtonWrap>
          </Link>
        </PanelWrap>
      </Wrapper>
    );
  }
}

export default CardArticle;
