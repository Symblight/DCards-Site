import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Container } from './index.styled';

class AdminTemplate extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    footer: PropTypes.node
  }

  render() {
    const { header, footer, children } = this.props;

    return (
      <Wrapper>
        {header}
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
        {footer}
      </Wrapper>
    );
  }
}

export default AdminTemplate;
