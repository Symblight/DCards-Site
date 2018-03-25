import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { InputWrap } from './index.styled';

class InputForm extends PureComponent {

    static propTypes = {
      value: PropTypes.string,
      onChange: PropTypes.func,
      type: PropTypes.string,
      name: PropTypes.string
    };

    render() {
      const { 
        value,
        onChange,
        type,
        name
      } = this.props;

      return (
        <InputWrap value={value} type={type} onChange={onChange} {...this.props} />
      );
    }
}

export default InputForm;