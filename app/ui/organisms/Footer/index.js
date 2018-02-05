import React, { PureComponent } from 'react';

import Label from 'ui/atoms/Label';

import { Wrapper, Content } from './index.styled';

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Content>
          <Label>Discount cards store</Label>
          <Label>&copy; 2017 Alexey</Label>
          <Label>version 0.1</Label>
        </Content>
      </Wrapper>
    );
  }
}

export default Footer;
