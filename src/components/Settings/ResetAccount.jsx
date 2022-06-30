import * as Button from '../Button';
import * as Account from './MyAccount';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import { Fragment, useState } from 'react';
import ConfirmActionModal from '../Modals/ConfirmActionModal';
import { Card } from '../Card';

const Content = () => {
    return (
        <Fragment>
            <Subtitle>Reset account</Subtitle>
            <Paragraph small='true'>
                If you reset your account, you will lose all of your progress
                and data
            </Paragraph>
        </Fragment>
    );
};

const ResetAccount = ({ mobile }) => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return mobile ? (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Are you sure you want to reset your account?
                </Paragraph>
            </ConfirmActionModal>
            <Account.Flex>
                <Account.MobileHeader>
                    <Content />
                </Account.MobileHeader>
                <Button.Alert small='true' align='center' onClick={openModal}>
                    Reset
                </Button.Alert>
            </Account.Flex>
        </Fragment>
    ) : (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Are you sure you want to reset your account?
                </Paragraph>
            </ConfirmActionModal>
            <Card>
                <Account.Flex>
                    <Header>
                        <Content />
                    </Header>
                    <Button.Alert
                        small='true'
                        align='center'
                        onClick={openModal}
                    >
                        Reset
                    </Button.Alert>
                </Account.Flex>
            </Card>
        </Fragment>
    );
};

export default ResetAccount;
