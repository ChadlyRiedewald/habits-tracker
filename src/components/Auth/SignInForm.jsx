import { useContext } from 'react';
import { AuthContext } from '../../hooks/Auth.context';

import * as Button from '../Button';
import Input from '../Input';

const SignInForm = () => {
    const { toggle } = useContext(AuthContext);

    return (
        <form>
            <Input name='email' label='Email:' type='email' />
            <Input name='password' label='Password:' type='password' />
            <Button.Base
                onClick={toggle}
                round='true'
                wide='true'
                align='center'
                margin='true'
                type='button'
            >
                Sign in
            </Button.Base>
        </form>
    );
};

export default SignInForm;
