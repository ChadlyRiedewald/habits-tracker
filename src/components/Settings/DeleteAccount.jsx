import { Fragment } from 'react';
import { useState } from 'react';

import * as Account from './MyAccount';
import * as Button from '../Button';
import ConfirmActionModal from '../Modals/ConfirmActionModal';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import { Card } from '../Card';

const Content = () => {
    return (
        <Fragment>
            <Subtitle>Delete account</Subtitle>
            <Paragraph small='true'>
                If you delete your account, all your data will be gone forever
            </Paragraph>
        </Fragment>
    );
};

const DeleteAccount = ({ mobile }) => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return mobile ? (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Are you sure you want to delete your account?
                </Paragraph>
            </ConfirmActionModal>
            <Account.Flex>
                <Account.MobileHeader>
                    <Content />
                </Account.MobileHeader>
                <Button.Error small='true' align='center' onClick={openModal}>
                    Delete
                </Button.Error>
            </Account.Flex>
        </Fragment>
    ) : (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Are you sure you want to delete your account?
                </Paragraph>
            </ConfirmActionModal>
            <Card>
                <Account.Flex>
                    <Header>
                        <Content />
                    </Header>
                    <Button.Error
                        small='true'
                        align='center'
                        onClick={openModal}
                    >
                        Delete
                    </Button.Error>
                </Account.Flex>
            </Card>
        </Fragment>
    );
};

export default DeleteAccount;
