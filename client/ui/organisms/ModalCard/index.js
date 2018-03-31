import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ModalLauncher from 'ui/organisms/ModalLauncher';
import WrapCard from 'ui/organisms/WrapCard';

class ModalCard extends PureComponent {
  render() {
    return (
      <ModalLauncher {...this.props}>
        <WrapCard />
      </ModalLauncher>
    );
  }
}

export default ModalCard;