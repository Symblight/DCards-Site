import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/BlockTemplate';
import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
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
            <PageTemplate 
                header={<Header />}
                footer={<Footer />}
                nav={this.renderHero()}
            >
                <Wrapper>
                </Wrapper>
            </PageTemplate>
        );
    }
}

export default AuthPage;