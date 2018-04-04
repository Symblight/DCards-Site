import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputText from 'ui/atoms/InputText';

import { Wrapper } from './index.styled';

class FormControlInput extends PureComponent {
    static propTypes = {

    }
    render() {
      return (
        <Wrapper>
          <InputText {...this.props} />
        </Wrapper>
      );
    }
}

export default FormControlInput;