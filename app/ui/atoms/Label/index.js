import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LabelStyled } from './index.styled';

class Label extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { className, children, color } = this.props;

    return (
      <LabelStyled color={color} className = {className}>
        {children}
      </LabelStyled>
    );
  }
}

export default Label;
