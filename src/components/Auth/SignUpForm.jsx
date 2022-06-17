import Input from '../Input';
import * as Button from '../Button';

const SignUpForm = () => {
    return (
        <form>
            <Input name='email' label='Email:' type='email' />
            <Input name='password' label='Password:' type='password' />
            <Button.Base
                round={true}
                wide={true}
                alignSelf='center'
                marginTop={true}
                type='button'
            >
                Sign up
            </Button.Base>
        </form>
    );
};

export default SignUpForm;
