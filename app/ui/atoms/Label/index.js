import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LabelStyled } from './index.styled';

class Label extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <LabelStyled>
        {children}
      </LabelStyled>
    );
  }
}

export default Label;
