import Input from '../Input';
import * as B from '../Button';

const ContactForm = () => {
    return (
        <form>
            <Input name='name' label='Name:' />
            <Input name='email' label='Email:' type='email' />
            <Input name='message' label='Message:' textarea={true} />
            <B.Base wide={true} marginTop={true}>
                Send
            </B.Base>
        </form>
    );
};

export default ContactForm;
