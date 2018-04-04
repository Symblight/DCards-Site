import React, { PureComponent } from 'react';

import Label from 'ui/atoms/Label';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from './index.styled';

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Content>
          <span>Бонусные карты</span>
          <span>&copy; 2018 Алекcей</span>
          <span>
            <Link to="/test">Demo components</Link>
          </span>
          <span>lx_tkchnk</span>
          <span>версия 0.001</span>
        </Content>
      </Wrapper>
    );
  }
}

export default Footer;
