import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/ButtonWith';

import {
  Wrapper,
  Header,
  Title,
  LogoWrap,
  Content,
  Discription,
  CreateByWrap,
  Footer,
  FooterShop,
  FooterContent,
  FooterMenu,
  FooterDiscription
} from './index.styled';

class CardFrontSide extends PureComponent {
    static propTypes = {
      title: PropTypes.string,
      isUser: PropTypes.bool,
      onGet: PropTypes.func,
      data: PropTypes.object,
      className: PropTypes.string
    };

    handleGetClick = (event) => {
      const { onGet } = this.props;

      if (onGet) {
        onGet(event);
      }
    };

    renderHeader() {
      const { title } = this.props;

      return (
        <Header>
          <Title>{title}</Title>
          <LogoWrap>logo</LogoWrap>
        </Header>
      );
    }

    renderContent() {
      const { data } = this.props;

      return (
        <Content>
          <Discription>{data.discription ? data.discription : null}</Discription>
          <CreateByWrap>{data.createBy ? data.createBy : null}</CreateByWrap>
        </Content>
      );
    }

    renderFooterUser() {
      const { data } = this.props;

      return (
        <Footer>
          <FooterDiscription>{data.footer}</FooterDiscription>
        </Footer>
      );
    }

    renderFooterShop() {
      const { data } = this.props;

      return (
        <FooterShop>
          <FooterContent>
            <FooterDiscription>{data.footer}</FooterDiscription>
          </FooterContent>
          <FooterMenu>
            <Button onClick={this.handleGetClick}>Получить</Button>
          </FooterMenu>
        </FooterShop>
      );
    }

    render() {
      const { isUser, className } = this.props;

      return (
        <Wrapper className={className}>
          {this.renderHeader()}
          {this.renderContent()}
          {
              isUser ?
              this.renderFooterUser() : this.renderFooterShop()
          }
        </Wrapper>
      );
    }
}

export default CardFrontSide;