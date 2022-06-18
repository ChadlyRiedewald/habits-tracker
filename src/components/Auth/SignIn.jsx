import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Button from '../Button';
import * as Auth from './Auth';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import SignInForm from './SignInForm';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
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
                <Auth.Wrapper>
                    <Auth.SignInWrapper>
                        <Header center='true'>
                            <h1>Log in</h1>
                            <Paragraph orange='true' width='80%' center='true'>
                                Log in with your account to Fix Your Habits
                            </Paragraph>
                        </Header>
                        <FormWrapper>
                            <SignInForm />
                        </FormWrapper>
                    </Auth.SignInWrapper>
                    <Auth.SignUpWrapper>
                        <Header center>
                            <h2>New here?</h2>
                            <Paragraph small='true' center='true'>
                                Create an account to start your journey
                            </Paragraph>
                            <Button.Inverted
                                onClick={() => navigate('/auth/sign-up')}
                                round='true'
                                align='center'
                                margin='true'
                            >
                                Sign up
                            </Button.Inverted>
                        </Header>
                    </Auth.SignUpWrapper>
                </Auth.Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default SignIn;
