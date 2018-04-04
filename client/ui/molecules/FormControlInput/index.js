import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputText from 'ui/atoms/InputText';

import { Wrapper, WrapMessage } from './index.styled';

class FormControlInput extends PureComponent {
    static propTypes = {
      validation: PropTypes.string,
      errorMessage: PropTypes.string
    }
    render() {
      const { validation, errorMessage } = this.props;

      return (
        <Wrapper state={validation}>
          <WrapMessage state={validation}>{errorMessage}</WrapMessage>
          <InputText {...this.props} />
        </Wrapper>
      );
    }
}

export default FormControlInput;