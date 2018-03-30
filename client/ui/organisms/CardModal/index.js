import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Modal from 'ui/molecules/Modal';
import CardArticle from 'ui/organisms/Card';

const DATA_TEST = {
  shop: 'name',
  discription: 111,
  id: 0
};

class CardModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleToggleModal =() => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <CardArticle
          data={DATA_TEST}
          onClick={this.handleToggleModal}
        />
        { this.state.showModal ?
          <Modal onClose={this.handleToggleModal} show={this.state.showModal}>
            Card Page
          </Modal> : null
        }
      </div>
    );
  }
}

export default CardModal;