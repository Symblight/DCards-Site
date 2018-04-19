import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { } from './index.styled';

class CreateCardModule extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { children, title } = this.props;

    return (
      <div>
        Create card module
      </div>
    );
  }
}

export default CreateCardModule;
