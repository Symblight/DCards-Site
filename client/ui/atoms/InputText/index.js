import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Input } from './index.styled';

class InputText extends PureComponent {
    static propTypes = {
      onChange: PropTypes.func,
      value: PropTypes.string,
      type: PropTypes.string,
      name: PropTypes.string,
      className: PropTypes.string
    };

    static defaultProps = {
      type: 'text'
    }

    constructor(props) {
      super(props);

      this.state = {
        value: props.value
      };
    }

    onChange = (event) => {
      const { onChange } = this.props;

      if (onChange) {
        onChange(event);
      }
    };

    render() {
      const {
        placeholder,
        value,
        type,
        className,
        name
      } = this.props;

      return (
        <Input
          className={className}
          type={type}
          onChange={this.onChange}
          value={value}
          placeholder={placeholder}
          {...this.props}
        />
      );
    }
}

export default InputText;
