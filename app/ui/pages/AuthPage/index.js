import React, { Component } from 'react';
import { Wrapper, FormContainer, DiscriptionContainer } from './index.styled';
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

import Block from 'ui/atoms/Block';
import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/FormSignIn';

const DISCRIPTION_TEXT = `Дискотные карты. Простое решение для вашего бизнесса. Создавайте и управляйте скидками вашего магазина. Это просто!`;

class AuthPage extends Component {
    render() {
        return (
            <PageTemplate>
                <Wrapper>
                    <Block>
                        <Container text>{DISCRIPTION_TEXT}</Container>
                    </Block>
                    <Block>
                        <FormContainer>
                            <SignInForm />
                        </FormContainer>
                    </Block>
                </Wrapper>
                <div><Link to="/test">Demo components</Link></div>
            </PageTemplate>
        );
    }
}

export default AuthPage;