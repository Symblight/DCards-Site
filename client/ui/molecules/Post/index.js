import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ButtonWith from 'ui/molecules/ButtonWith';
import ContextMenu from 'ui/molecules/ContextMenu';
import DropdownItem from 'ui/molecules/DropdownItem';

import { Wrapper, TopWrap, ContentWrap, BottomWrap, MenuWrap } from './index.styled';

class PostContainer extends PureComponent {
    static propTypes = {
      onDelete: PropTypes.func,
      onClick: PropTypes.func,
      children: PropTypes.node
    }

    handleOnMenu = (event) => {

    };

    handleOnClick = (event) => {

    };

    renderTopMenu() {
      return (
        <TopWrap>
          <MenuWrap>
            <ContextMenu position="bottom-left">
              <DropdownItem primary>
                Редактировать
              </DropdownItem>
              <DropdownItem primary>
                Удалить
              </DropdownItem>
            </ContextMenu>
          </MenuWrap>
        </TopWrap>
      );
    }

    renderBottomMenu() {
      return (
        <BottomWrap>
          <ButtonWith onClick={this.handleOnClick}>Open</ButtonWith>
        </BottomWrap>
      );
    }

    render() {
      const { children, onDelete, onClick } = this.props;

      return (
        <Wrapper>
          {
             this.renderTopMenu()
          }
          <ContentWrap>
            {children}
          </ContentWrap>
          {this.renderBottomMenu()}
        </Wrapper>
      );
    }
}

export default PostContainer;