import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Flipper,
  WrapperBackSide,
  WrapperFrontSide
} from './index.styled';

class Card extends PureComponent {
    static propTypes = {
      onClick: PropTypes.func,
      className: PropTypes.string,
      flipped: PropTypes.bool,
      children: PropTypes.node
    };

    handleonClickTransform = (event) => {
      const { onClick } = this.props;

      if (onClick) {
        onClick(event);
      }
    };

    renderFrontSide() {
      const { children } = this.props;

      return (
        <WrapperFrontSide>
          {children[0]}
        </WrapperFrontSide>
      );
    }

    renderBackSide() {
      const { children } = this.props;

      return (
        <WrapperBackSide>
          {children[1]}
        </WrapperBackSide>
      );
    }

    render() {
      const { flipped, children } = this.props;

      if (children.length < 2 || children.length > 2) {
        return null;
      }

      return (
        <Wrapper
          onClick={this.handleonClickTransform}
          role="presentation"
          state={flipped}
          className={this.props.className}
        >
          <Flipper state={flipped}>
            {this.renderFrontSide()}
            {this.renderBackSide()}
          </Flipper>
        </Wrapper>
      );
    }
}

export default Card;