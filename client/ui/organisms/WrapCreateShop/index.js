import React, { PureComponent } from 'react';

import FieldText from 'ui/molecules/FieldText';
import ChooseAvatar from 'ui/organisms/ChooseAvatar';
import Button from 'ui/molecules/PrimaryButton';
import TextArea from 'ui/atoms/TextArea';

import { Wrapper } from './index.styled';

class WrapCreateShop extends PureComponent {
  render() {
    return (
      <Wrapper>
        <ChooseAvatar />
        <FieldText
          title="Заголовок:"
         // value={data.firstname}
         // onChange={this.onChange}
          edit={true}
          name="title"
        />
        <TextArea />
        <Button>Создать магазин</Button>
      </Wrapper>
    );
  }
}

export default WrapCreateShop;