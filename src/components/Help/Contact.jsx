import Input from '../Input';
import * as B from '../Button';

const Contact = () => {
    return (
        <form>
            <Input name='name' label='Name' />
            <Input name='email' label='Email' type='email' />
            <Input name='message' label='Message' textarea />
            <B.Base wide round alignSelf='center' marginTop>
                Send
            </B.Base>
        </form>
    );
};

export default Contact;
