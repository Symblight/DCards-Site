import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Slider } from './index.styled';

class MenuItem extends PureComponent {
    static propTypes = {
      content: PropTypes.node,
      className: PropTypes.string,
      onClick: PropTypes.func,
      active: PropTypes.bool,
      name: PropTypes.string
    };

    static defaultPropTypes = {
      active: false
    };

    handleOnClick = (event) => {
      const { onClick } = this.props;

      if (onClick) {
        onClick(event, event.target.id);
      }
    };

    render() {
      const {
        content, className, active, name, onClick
      } = this.props;

      return (
        <Wrapper
          className={className}
          onClick={this.handleOnClick}
          name={name}
          id={name}
          role="presentation"
        >
          <Slider state={active} />
          {content}
        </Wrapper>
      );
    }
}

export default MenuItem;