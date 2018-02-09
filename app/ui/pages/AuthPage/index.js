import React, { PureComponent } from 'react';
import { Wrapper, FormContainer, DiscriptionContainer } from './index.styled';
import { Container, Header } from 'semantic-ui-react'

import Block from 'ui/atoms/Block';
import PageTemplate from 'ui/templates/AuthTemplate';
import SignInForm from 'components/FormSignIn';

const DISCRIPTION_TEXT = `DISCRIPTION`;

class AuthPage extends PureComponent {
    render() {
        return (
            <PageTemplate>
                <Wrapper>
                    <Block>
                        <DiscriptionContainer>{DISCRIPTION_TEXT}</DiscriptionContainer>
                    </Block>
                    <Block>
                        <FormContainer>
                            <SignInForm  />
                        </FormContainer>
                    </Block>
                </Wrapper>
            </PageTemplate>
        );
    }
}

export default AuthPage;