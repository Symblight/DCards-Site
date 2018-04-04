import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class FormContainer extends PureComponent {
    static propTypes = {
      children: PropTypes.node
    }
    render() {
      const { children } = this.props;

      return (
        <Wrapper>
          {children}
        </Wrapper>
      );
    }
}

export default FormContainer;