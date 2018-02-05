import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';

//import { Button } from './index.styled';

const type = "inverted";

class FlatButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    typeButton: PropTypes.string
  }

  render() {
    const { children } = this.props;
    return (
      <Button {...this.props}>{children}</Button>
    );
  }
}

export default FlatButton;
