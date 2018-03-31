import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Modal from 'ui/molecules/Modal';
import CardArticle from 'ui/organisms/Card';

class ModalLauncher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
  }

  handleToggleModal =(event) => {
    const { location, history } = this.props;

    history.goBack();

    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        { this.state.showModal ?
          <Modal onClose={this.handleToggleModal} show={this.state.showModal}>
            {children}
          </Modal> : null
        }
      </div>
    );
  }
}

export default ModalLauncher;