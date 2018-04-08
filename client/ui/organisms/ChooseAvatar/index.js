import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Photo from 'ui/atoms/Photo';
import Button from 'ui/molecules/ButtonWith';
import ImgTest from 'assets/images/person.png';

import { Wrapper, ButtonWrap } from './index.styled';

class ChooseAvatar extends PureComponent {
    static propTypes = {

    };

    render() {
      return (
        <Wrapper>
          <Photo src={ImgTest} />
          <ButtonWrap>
            <Button>Изменить</Button>
          </ButtonWrap>
        </Wrapper>
      );
    }
}

export default ChooseAvatar;