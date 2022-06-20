import * as Button from '../Button';
import Input from '../Input';
import { Fragment } from 'react';
import { useState } from 'react';
import ConfirmActionModal from '../Modals/ConfirmActionModal';
import { Paragraph } from '../Paragraph';

const ContactForm = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Message is sent!
                    {/*    TODO make a succesfully sent message modal*/}
                </Paragraph>
            </ConfirmActionModal>
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
