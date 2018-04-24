import React, { PureComponent } from 'react';
import { BlockPicker } from 'react-color';
import PropTypes from 'prop-types';

import Card from 'ui/atoms/Card';

import { Wrapper } from './index.styled';

class CreateCardModule extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  render() {
    const { children, title } = this.props;

    return (
      <Wrapper>
        <div>
          <Card> Card Front </Card>
          <BlockPicker />
        </div>
        <div>
          <Card>Card Back</Card>
          <BlockPicker />
        Create card module
        </div>
      </Wrapper>
    );
  }
}

export default CreateCardModule;
