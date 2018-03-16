import React, { PureComponent } from 'react';

import Label from 'ui/atoms/Label';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from './index.styled';

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Content>
          <Label>Бонусные карты</Label>
          <Label>&copy; 2018 Алекей</Label>
          <Label>
            <Link to="/test">Demo components</Link>
          </Label>
          <Label>версия 0.001</Label>
        </Content>
      </Wrapper>
    );
  }
}

export default Footer;
