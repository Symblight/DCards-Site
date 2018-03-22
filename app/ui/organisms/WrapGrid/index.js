import React, { PureComponent } from 'react';

import CardSVG from 'assets/images/card.svg';

import { Wrapper, PanelWrap, InfoWrap, DiscriptionWrap, CreateWrap } from './index.styeld';

class WrapGrid extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <h2>Name</h2>
        <PanelWrap>
          <CardSVG height={240} width={390} />
          <InfoWrap>
            <DiscriptionWrap>Описание</DiscriptionWrap>
            <CreateWrap>Автор</CreateWrap>
          </InfoWrap>
        </PanelWrap>
      </Wrapper>
    );
  }
}

export default WrapGrid;
