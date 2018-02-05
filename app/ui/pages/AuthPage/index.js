import React, { Component } from 'react';
import { Wrapper, FormContainer, DiscriptionContainer } from './index.styled';
import { Link } from 'react-router-dom'

import Block from 'ui/atoms/Block';

import PageTemplate from 'ui/templates/PageTemplate';

const DISCRIPTION_TEXT = `Дискотные карты. Простое решение для вашего бизнесса. Создавайте и управляйте скидками вашего магазина. Это просто!`;

class AuthPage extends Component {
    render() {
        return (
            <PageTemplate>
                <Wrapper>
                    <Block>
                        <DiscriptionContainer>{DISCRIPTION_TEXT}</DiscriptionContainer>
                    </Block>
                    <Block>
                        <FormContainer>Panel</FormContainer>
                    </Block>
                </Wrapper>
                <div><Link to="/test">Demo components</Link></div>
            </PageTemplate>
        );
    }
}

export default AuthPage;