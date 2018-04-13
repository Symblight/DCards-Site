import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from 'ui/atoms/CardContainer';
import CardFront from 'ui/atoms/CardFront';
import CardBack from 'ui/atoms/CardBack';

import {
  Wrapper,
  ButtonRemove,
  ButtonEdit
} from './index.styled';

class CardLayout extends PureComponent {
    static propTypes = {
      isUser: PropTypes.bool,
      onRemove: PropTypes.func,
      onEdit: PropTypes.func,
      children: PropTypes.node,
      remove: PropTypes.bool,
      edit: PropTypes.bool
    }

    state = {
      flipped: false
    };

    handleOnClickFlip = (event) => {
      if (event.target.nodeName !== 'BUTTON') {
        this.setState({ flipped: !this.state.flipped });
      }
    };

    handleOnRemove = (event) => {
      const { onRemove } = this.props;

      if (onRemove) {
        onRemove(event);
      }
    };

    handleOnEdit = (event) => {
      const { onEdit } = this.props;

      if (onEdit) {
        onEdit(event);
      }
    };

    render() {
      const {
        isUser, edit, remove, children
      } = this.props;

      return (
        <Wrapper>
          <Card
            onClick={this.handleOnClickFlip}
            flipped={this.state.flipped}
          >
            {children}
          </Card>{
            remove ?
              <ButtonRemove onClick={this.handleOnRemove}><i className="material-icons">delete</i>Удалить</ButtonRemove> : null
          }
          {
            edit ?
              <ButtonEdit onClick={this.handleOnEdit}><i className="material-icons">mode_edit</i>Редактировать</ButtonEdit> : null
          }
        </Wrapper>
      );
    }
}

export default CardLayout;