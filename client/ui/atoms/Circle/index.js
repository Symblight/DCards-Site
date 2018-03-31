import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { WrapCircle } from './index.styled';

class Circle extends PureComponent {

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;

    return (
      <div>
        <WrapCircle className={className} />
      </div>
    );
  }
}

export default Circle;
