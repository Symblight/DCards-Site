import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import IconFace from 'assets/images/icons/facebook.svg';
import IconGoo from 'assets/images/icons/google-icon.svg';
import IconVK from 'assets/images/icons/vk-logo.svg';
import ButtonWith from 'ui/molecules/ButtonWith';
import SignInForm from 'ui/organisms/SignInForm';

import {
  Wrapper,
  WithBlock,
  QuestBlock,
  TitleBlock,
  SocialWrap
} from './index.styled';

class SignInPage extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  renderTitle() {
    return (
      <TitleBlock>
        <h2>Discount cards!</h2>
        <h3>Авторизация</h3>
      </TitleBlock>
    );
  }

  renderSocialButtons() {
    return (
      <WithBlock>
        <SocialWrap>
          <ButtonWith color="#4267b2"><IconFace height={20} width={20} /></ButtonWith>
        </SocialWrap>
        <SocialWrap>
          <ButtonWith><IconGoo height={20} width={20} /></ButtonWith>
        </SocialWrap>
        <SocialWrap>
          <ButtonWith color="#4a76a8"><IconVK height={20} width={20} /></ButtonWith>
        </SocialWrap>
      </WithBlock>
    );
  }

  renderBottomMenu() {
    return (
      <QuestBlock>
        <div>Нету аккаунта? <a href="/">Регистрация</a></div>
        <div><a href="/">Забыли пароль?</a></div>
      </QuestBlock>
    );
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <PageTemplate
        header={<Header />}
      >
        <Wrapper>
          {this.renderTitle() }
          {this.renderSocialButtons()}
          <SignInForm onSubmit={onSubmit} />
          {this.renderBottomMenu()}
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignInPage;
