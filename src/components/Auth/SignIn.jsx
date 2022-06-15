import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import { useNavigate } from 'react-router-dom';

import SignInForm from './SignInForm';
import { Fragment } from 'react';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Inverted } from '../Button';
import { FormWrapper, SignInContainer, SignUpContainer, Wrapper } from './Auth';

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
                        <Header>
                            <h1>Log in</h1>
                            <Paragraph orange width='80%'>
                                Log in with your account to Fix Your Habits
                            </Paragraph>
                        </Header>
                        <FormWrapper>
                            <SignInForm />
                        </FormWrapper>
                    </SignInContainer>
                    <SignUpContainer>
                        <Header>
                            <h2>New here?</h2>
                            <Paragraph small>
                                Create an account to start your journey
                            </Paragraph>
                            <Inverted
                                onClick={() => navigate('sign-up')}
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
