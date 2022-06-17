import Input from '../Input';
import * as B from '../Button';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/Auth.context';

const SignInForm = () => {
    const { toggle } = useContext(AuthContext);

    return (
        <form>
            <Input name='email' label='Email:' type='email' />
            <Input name='password' label='Password:' type='password' />
            <B.Base
                onClick={toggle}
                round={true}
                wide={true}
                alignSelf='center'
                marginTop={true}
                type='button'
            >
                Sign in
            </B.Base>
        </form>
    );
};

export default SignInForm;
