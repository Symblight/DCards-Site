import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Input } from './index.styled';

class InputText extends PureComponent {
    static propTypes = {
      onChange: PropTypes.func
    };

    onChange=(event) => {
      const { onChange } = this.props;

      if (onChange) {
        onChange(event.target.value);
      }
    };

    render() {
      const { placeholder } = this.props;

      return (
        <Input type="text" onChange={this.onChange} placeholder={placeholder} />
      );
    }
}

export default InputText;
