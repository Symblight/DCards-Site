import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ButtonWrap, ItemTextWrap, ItemLoginWrap } from './index.styled';

class ItemNavButton extends PureComponent {

    static propTypes = {
      children: PropTypes.node.isRequired,
      type: PropTypes.string
    };

    static defaultPropTypes = {
      type: 'text'
    };

    renderItemText() {
      const { children } = this.props;

      return (
        <ItemTextWrap>
          {children}
        </ItemTextWrap>
      );
    }

    renderItemLogin() {
      const { children } = this.props;

      return (
        <ItemLoginWrap>
          {children}
        </ItemLoginWrap>
      );
    }

    render() {
      const { type } = this.props;

      return (
        <ButtonWrap type={type}>
          {
            type === 'login' ? this.renderItemLogin() : this.renderItemText()
          }
        </ButtonWrap>
      );
    }
}

export default ItemNavButton;
