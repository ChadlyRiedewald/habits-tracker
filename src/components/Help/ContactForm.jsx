import * as Button from '../Button';
import Input from '../Input';

const ContactForm = () => {
    return (
        <form>
            <Input name='name' label='Name:' />
            <Input name='email' label='Email:' type='email' />
            <Input name='message' label='Message:' textarea='true' />
            <Button.Base wide='true' margin='true' align='center' round='true'>
                Send
            </Button.Base>
        </form>
    );
};

export default ContactForm;
