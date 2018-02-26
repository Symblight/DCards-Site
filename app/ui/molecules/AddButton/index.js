import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/atoms/Button';

import { AddButtonWrap, IconWrap, ButtonWrap } from './index.styled';

class AddButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { className, children } = this.props;

    return (
      <AddButtonWrap>
        <IconWrap>
            <i className="add icon"></i>
        </IconWrap>
        <ButtonWrap className={className}>{children}</ButtonWrap>
      </AddButtonWrap>
    );
  }
}

export default AddButton;
