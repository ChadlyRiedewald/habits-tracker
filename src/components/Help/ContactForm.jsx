import * as Button from '../Button';
import Input from '../Input';
import { Fragment } from 'react';
import { useState } from 'react';
import { Paragraph } from '../Paragraph';
import Modal from '../Modals';
import styled from 'styled-components/macro';

const ContactForm = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return (
        <Fragment>
            <Modal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <FlexColumn>
                    <Paragraph center='true'>Message is sent!</Paragraph>
                    <Button.Base
                        small='true'
                        align='center'
                        onClick={() => setModalIsOpen(false)}
                    >
                        Ok
                    </Button.Base>
                </FlexColumn>
            </Modal>
            <form>
                <Input name='name' label='Name:' />
                <Input name='email' label='Email:' type='email' />
                <Input name='message' label='Message:' textarea='true' />
                <Button.Base
                    wide='true'
                    margin='true'
                    align='center'
                    round='true'
                    onClick={openModal}
                    type='button'
                >
                    Send
                </Button.Base>
            </form>
        </Fragment>
    );
};

export default ContactForm;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--padding-md);
    gap: var(--padding-md);
`;
