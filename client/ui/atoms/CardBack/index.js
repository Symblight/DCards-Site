import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Header,
  Title,
  Barcode,
  Content,
  Author,
  Discription,
  Footer,
  FooterDiscription
} from './index.styled';

class CardBackSide extends PureComponent {
    static propTypes = {
      isUser: PropTypes.bool,
      data: PropTypes.object,
      className: PropTypes.string
    };

    renderHeader() {
      const { isUser, data } = this.props;

      return (
        <Header>
          <Barcode>barcode</Barcode>
        </Header>
      );
    }

    renderContent() {
      const { data } = this.props;

      return (
        <Content>
          <Discription>{data.discription ? data.discription : null}</Discription>
        </Content>
      );
    }

    render() {
      const {
        data, className
      } = this.props;

      return (
        <Wrapper className={className}>
          {this.renderHeader()}
          {this.renderContent()}
          <Footer>
            {data.footer}
          </Footer>
        </Wrapper>
      );
    }
}

export default CardBackSide;