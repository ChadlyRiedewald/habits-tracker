import Input from '../Input';
import * as B from '../Button';
import styled from 'styled-components/macro';

const Contact = () => {
    return (
        <Wrapper>
            <form>
                <Input name='name' label='Name:' />
                <Input name='email' label='Email:' type='email' />
                <Input name='message' label='Message:' textarea />
                <B.Base wide round alignSelf='center' marginTop>
                    Send
                </B.Base>
            </form>
        </Wrapper>
    );
};

export default Contact;

const Wrapper = styled.div`
    margin-inline: auto;
    width: clamp(280px, 80vw, 650px);
`;
