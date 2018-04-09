import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Triangle, TitleWrap, ListWrap } from './index.styled';

class MenuStrip extends PureComponent {

    static propTypes = {
      title: PropTypes.string,
      children: PropTypes.node
    };

    state = {
      triggered: false
    }

    handleOverTriggered = () => {
      this.setState({
        triggered: true
      });
    };

    handleOutTriggered = () => {
      this.setState({
        triggered: false
      });
    };

    renderItems() {
      const { children } = this.props;

      return (
        <ListWrap>
          {
            children
          }
        </ListWrap>
      );
    }

    render() {
      const { title } = this.props;

      return (
        <Wrapper onMouseEnter={this.handleOverTriggered} onMouseLeave={this.handleOutTriggered}>
          <TitleWrap>{title}</TitleWrap> <Triangle />
          {
            this.state.triggered ? this.renderItems() : null
          }
        </Wrapper>
      );
    }
}

export default MenuStrip;
