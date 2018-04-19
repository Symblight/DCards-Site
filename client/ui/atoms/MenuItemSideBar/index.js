import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class MenuItem extends PureComponent {
    static propTypes = {
      className: PropTypes.string,
      content: PropTypes.string,
      onClick: PropTypes.func
    };

    onClick = (event) => {
      const { onClick } = this.props;

      if (onClick) {
        onClick(event, event.target.id);
      }
    };

    render() {
      const { className, content, name } = this.props;

      return (
        <Wrapper className={className} onClick={this.onClick} name={name} id={name} role="presentation">
          {content}
        </Wrapper>
      );
    }
}

export default MenuItem;