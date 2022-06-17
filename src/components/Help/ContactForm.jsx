import Input from '../Input';
import * as Button from '../Button';

const ContactForm = () => {
    return (
        <form>
            <Input name='name' label='Name:' />
            <Input name='email' label='Email:' type='email' />
            <Input name='message' label='Message:' textarea={true} />
            <Button.Base wide={true} marginTop={true}>
                Send
            </Button.Base>
        </form>
    );
};

export default ContactForm;
