import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Content } from './index.styled';

class HeaderAdmin extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  render() {
    const { children, title } = this.props;

    return (
      <Wrapper>
            Header
      </Wrapper>
    );
  }
}

export default HeaderAdmin;
