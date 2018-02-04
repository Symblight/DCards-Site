import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Label from 'ui/atoms/Label';
import { Wrapper, Title, Content } from './index.styled';

class BlockComponent extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { children, title } = this.props;

    return (
      <Wrapper>
        <Title>
          <Label>{title}</Label>
        </Title>
        <Content>{children}</Content>
      </Wrapper>
    );
  }
}

export default BlockComponent;
