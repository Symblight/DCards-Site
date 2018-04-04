import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/atoms/Button';

import { ButtonWrap } from './index.styled';

class TextButton extends PureComponent {

    static propTypes = {
      children: PropTypes.node.isRequired
    }

    render() {
      const { children } = this.props;

      return (<ButtonWrap>
        {children}
      </ButtonWrap>
      );
    }
}

export default TextButton;
