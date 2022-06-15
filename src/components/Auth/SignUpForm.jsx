import Input from '../Input';
import * as B from '../Button';

const SignUpForm = () => {
    return (
        <form>
            <Input name='email' label='Email:' type='email' />
            <Input name='password' label='Password:' type='password' />
            <B.Base round wide alignSelf='center' marginTop type='button'>
                Sign up
            </B.Base>
        </form>
    );
};

export default SignUpForm;
