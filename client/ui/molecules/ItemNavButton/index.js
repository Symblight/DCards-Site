import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'ui/atoms/FlatButton';

import { ButtonWrap, ItemTextWrap, ItemLoginWrap } from './index.styled';

class ItemNavButton extends PureComponent {

    static propTypes = {
      children: PropTypes.node.isRequired,
      type: PropTypes.string
    };

    static defaultPropTypes = {
      type: 'text'
    };

    render() {
      const { type, children } = this.props;

      if (type === 'login') {
        return (
          <FlatButton primary>{children}</FlatButton>
        );
      }

      return (
        <FlatButton standard>
          {children}
        </FlatButton>
      );
    }
}

export default ItemNavButton;
