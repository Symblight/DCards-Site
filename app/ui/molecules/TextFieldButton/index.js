import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'ui/atoms/TextField';
import Button from 'ui/atoms/Button';

class TextFieldButton extends Component {

  static propTypes = {
    button: PropTypes.node.isRequired,
    placeholder: PropTypes.string.isRequired,
  }

  render() {
    const { button, placeholder } = this.props;

    return (
      <div>
        <TextField placeholder={placeholder} />
        <Button>{button}</Button>
      </div>
    );
  }
}

export default TextFieldButton;
