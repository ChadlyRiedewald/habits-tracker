import Input from '../Input';
import * as B from '../Button';
import TabletOnly from '../TabletOnly';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/Auth';
import * as S from './Auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { toggle } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.SignInContainer>
                <TabletOnly>
                    <S.Header>
                        <S.Title>Log in</S.Title>
                        <S.Paragraph orange big>
                            Log in with your account to Fix Your Habits
                        </S.Paragraph>
                    </S.Header>
                </TabletOnly>
                <form>
                    <Input name='email' label='Email' type='email' />
                    <Input name='password' label='Password' type='password' />
                    <B.Base
                        onClick={toggle}
                        round
                        wide
                        alignSelf='center'
                        marginTop
                        type='button'
                    >
                        Sign in
                    </B.Base>
                </form>
            </S.SignInContainer>
            <TabletOnly>
                <S.SignUpContainer>
                    <S.Header>
                        <h2>New here?</h2>
                        <S.Paragraph>
                            Create an account to start your journey
                        </S.Paragraph>
                        <B.Inverted
                            onClick={() => navigate('sign-up')}
                            round
                            alignSelf='center'
                            marginTop
                            type='button'
                        >
                            Sign up
                        </B.Inverted>
                    </S.Header>
                </S.SignUpContainer>
            </TabletOnly>
        </S.Wrapper>
    );
};

export default SignIn;
