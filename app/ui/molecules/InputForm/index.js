import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { InputWrap } from './index.styled';

class InputForm extends PureComponent {

    static propTypes = {
      value: PropTypes.string,
      onChange: PropTypes.func,
      type: PropTypes.string
    };

    render() {
      const { value, onChange, type } = this.props;

      return (
        <InputWrap value={value} type={type} onChange={onChange} />
      );
    }
}

export default InputForm;