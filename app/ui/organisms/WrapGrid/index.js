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
          <CardSVG height={180} width={360} />
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
