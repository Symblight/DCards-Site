import React, { PureComponent } from 'react';

import Menu from 'ui/molecules/Menu';
import withFilterUserCards from 'components/proxy-props/withFilterUserCards';
import Photo from 'ui/atoms/Photo';
import Img from 'assets/images/person.png';
import withAccountInfo from 'components/proxy-props/withAccountInfo';

import { Wrapper, ButtonWrap } from './index.styled';

@withFilterUserCards
@withAccountInfo
class MenuCards extends PureComponent {
  render() {
    const { cards, data } = this.props;

    return (
      <Menu title="Меню">
        <Wrapper>
          <div>
            <Photo src={Img} />
          </div>
          <h3> {`${data.firstname}  ${data.lastname}`}</h3>
          <ul>
            <li><h4>Количество карт: {cards.length}</h4></li>
          </ul>
        </Wrapper>
      </Menu>
    );
  }
}


export default MenuCards;
