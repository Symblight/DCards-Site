import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Input } from './index.styled';

class InputText extends PureComponent {
    static propTypes = {
      onChange: PropTypes.func,
      value: PropTypes.string,
      type: PropTypes.string,
      className: PropTypes.string
    };

    static defaultProps = {
      type: 'text'
    }

    constructor(props) {
      super(props);

      this.state = {
        value: props.value ? props.value : ''
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }

    onChange = (event) => {
      const { onChange } = this.props;

      this.setState({ value: event.target.value });

      if (onChange) {
        onChange(event.target.value);
      }
    };

    render() {
      const {
        placeholder, value, type, className
      } = this.props;

      return (
        <Input
          className={className}
          type={type}
          onChange={this.onChange}
          value={this.state.value}
          placeholder={placeholder}
        />
      );
    }
}

export default InputText;
