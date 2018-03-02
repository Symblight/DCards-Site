import React, { PureComponent } from 'react';
import { Container, Header } from 'semantic-ui-react'

import Block from 'ui/atoms/Block';
import PageTemplate from 'ui/templates/BlockTemplate';
import SignInForm from 'components/SignIn';

import { Wrapper, FormContainer, DiscriptionContainer } from './index.styled';

const DISCRIPTION_TEXT = `DISCRIPTION`;

class AuthPage extends PureComponent {

    renderHero() {
        return(
            <FormContainer>
                <DiscriptionContainer>{DISCRIPTION_TEXT}</DiscriptionContainer>
                <SignInForm  />
            </FormContainer>
        );
    }

    render() {
        const { onSignIn, onSignUp } = this.props;

        return (
            <PageTemplate header={this.renderHero()}>
                <Wrapper>
                </Wrapper>
            </PageTemplate>
        );
    }
}

export default AuthPage;