import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import { useNavigate } from 'react-router-dom';

import SignInForm from './SignInForm';
import { Fragment } from 'react';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Inverted } from '../Button';
import { SignInContainer, SignUpContainer, Wrapper } from './Auth';
import { FormWrapper } from '../FormWrapper';

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <MobileOnly>
                <FormWrapper>
                    <SignInForm />
                </FormWrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <SignInContainer>
                        <Header center={true}>
                            <h1>Log in</h1>
                            <Paragraph orange={true} width='80%' center={true}>
                                Log in with your account to Fix Your Habits
                            </Paragraph>
                        </Header>
                        <FormWrapper>
                            <SignInForm />
                        </FormWrapper>
                    </SignInContainer>
                    <SignUpContainer>
                        <Header center>
                            <h2>New here?</h2>
                            <Paragraph small={true} center={true}>
                                Create an account to start your journey
                            </Paragraph>
                            <Inverted
                                onClick={() => navigate('/auth/sign-up')}
                                round
                                alignSelf='center'
                                marginTop
                            >
                                Sign up
                            </Inverted>
                        </Header>
                    </SignUpContainer>
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default SignIn;
