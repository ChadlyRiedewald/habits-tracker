import styled from 'styled-components/macro';
import Input from '../Input';
import * as B from '../Button';
import * as S from './Auth';
import TabletOnly from '../TabletOnly/TabletOnly';
import { BREAKPOINTS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <SignUpContainer>
                <TabletOnly>
                    <S.Header>
                        <S.Title>Get started</S.Title>
                        <S.Paragraph big orange>
                            Welcome to Fix Your Habits
                            <br />
                            Fill in your info to get started
                        </S.Paragraph>
                    </S.Header>
                </TabletOnly>
                <form>
                    <Input name='email' label='Email' type='email' />
                    <Input name='password' label='Password' type='password' />
                    <B.Base
                        round
                        wide
                        alignSelf='center'
                        marginTop
                        type='button'
                    >
                        Sign up
                    </B.Base>
                </form>
            </SignUpContainer>
            <TabletOnly>
                <SignInContainer>
                    <S.Header>
                        <h2>Welcome Back!</h2>
                        <S.Paragraph>
                            Already have an account?
                            <br />
                            Click on the button below to sign in
                        </S.Paragraph>
                        <B.Inverted
                            onClick={() => navigate('/auth')}
                            round
                            alignSelf='center'
                            marginTop
                            type='button'
                        >
                            Sign in
                        </B.Inverted>
                    </S.Header>
                </SignInContainer>
            </TabletOnly>
        </S.Wrapper>
    );
};

export default SignUp;

const SignInContainer = styled(S.SignUpContainer)`
    @media screen and ${BREAKPOINTS.smMin} {
        border-bottom-left-radius: var(--border-radius-lg);
        border-bottom-right-radius: var(--border-radius-lg);
    }

    @media screen and ${BREAKPOINTS.mdMin} {
        order: 1;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-top-left-radius: var(--border-radius-lg);
        border-bottom-left-radius: var(--border-radius-lg);
    }
`;

const SignUpContainer = styled(S.SignInContainer)`
    @media screen and ${BREAKPOINTS.mdMin} {
        order: 2;
    }
`;
