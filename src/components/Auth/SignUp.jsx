import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import MobileOnly from '../MobileOnly/MobileOnly';
import * as Style from './Auth';
import SignUpForm from './SignUpForm';
import DesktopOnly from '../DesktopOnly/DesktopOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Inverted } from '../Button';
import { Fragment } from 'react';
import { FormWrapper } from '../FormWrapper';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <MobileOnly>
                <FormWrapper>
                    <SignUpForm />
                </FormWrapper>
            </MobileOnly>
            <DesktopOnly>
                <Style.Wrapper>
                    <SignInContainer>
                        <Header>
                            <h2>Welcome back</h2>
                            <Paragraph small>
                                Already have an account?
                                <br />
                                Click the button below to sign in
                            </Paragraph>
                            <Inverted
                                onClick={() => navigate('/auth/sign-in')}
                                round
                                alignSelf='center'
                                marginTop
                            >
                                Sign in
                            </Inverted>
                        </Header>
                    </SignInContainer>
                    <SignUpContainer>
                        <Header>
                            <h1>Get started</h1>
                            <Paragraph orange width='80%'>
                                Welcome to Fix Your Habits! Fill in your info to
                                get started!
                            </Paragraph>
                        </Header>
                        <FormWrapper>
                            <SignUpForm />
                        </FormWrapper>
                    </SignUpContainer>
                </Style.Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default SignUp;

const SignInContainer = styled.div`
    background-color: var(--color-orange-300);
    display: flex;
    align-items: center;
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
    padding: var(--padding-lg);
    flex-basis: 40%;
`;

const SignUpContainer = styled(Style.SignInContainer)``;
