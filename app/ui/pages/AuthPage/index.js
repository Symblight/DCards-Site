import React, { Component } from 'react';
import { Wrapper, FormContainer, DiscriptionContainer } from './index.styled';
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

import Block from 'ui/atoms/Block';
import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/FormSignIn';

const DISCRIPTION_TEXT = ``;

class AuthPage extends Component {
    render() {
        return (
            <PageTemplate>
                <Wrapper>
                    <Block>
                        <DiscriptionContainer>{DISCRIPTION_TEXT}</DiscriptionContainer>
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