import Input from '../Input';
import * as Button from '../Button';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/Auth.context';

const SignInForm = () => {
    const { toggle } = useContext(AuthContext);

    return (
        <form>
            <Input name='email' label='Email:' type='email' />
            <Input name='password' label='Password:' type='password' />
            <Button.Base
                onClick={toggle}
                round={true}
                wide={true}
                alignSelf='center'
                marginTop={true}
                type='button'
            >
                Sign in
            </Button.Base>
        </form>
    );
};

export default SignInForm;
