import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/ButtonWith';
import Picture from 'ui/atoms/Picture';
import ImageTEST from 'assets/images/coffe.png';

import { Wrapper, WrapInfo, WrapPicture } from './index.styled';

class InfoShop extends PureComponent {
  render() {
    return (
      <Wrapper>
        <WrapPicture>
          <Picture src={ImageTEST} height={100} width={100} />
          <Button>Изменить</Button>
        </WrapPicture>
        <WrapInfo>
          <div>Название</div>
          <div>Описание</div>
          <Button>Сохранить</Button>
        </WrapInfo>
      </Wrapper>
    );
  }
}

export default InfoShop;