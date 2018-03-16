import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';
import Field from 'ui/atoms/Field';

import { FieldTitle, ContentWrap, DotsWrap } from './index.styled';

class FieldPassword extends PureComponent {
    static propTypes = {
      title: PropTypes.string,
      onClick: PropTypes.func
    };

    renderTitle() {
      const { title } = this.props;

      return (
        <FieldTitle>
          { title }
        </FieldTitle>
      );
    }

    render() {
      const { onClick } = this.props;

      return (
        <Field>
          {
                    this.renderTitle()
                }
          <ContentWrap>
            <DotsWrap>••••••••••</DotsWrap>
            <Button onClick={onClick}>Изменить пароль</Button>
          </ContentWrap>
        </Field>
      );
    }
}

export default FieldPassword;
