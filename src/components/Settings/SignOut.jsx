import * as Button from '../Button';
import * as Account from './MyAccount';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Header } from '../Header';
import { Fragment } from 'react';
import { useState } from 'react';
import ConfirmActionModal from '../Modals/ConfirmActionModal';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/Auth.context';

const Content = () => {
    return (
        <Fragment>
            <Subtitle>Signout</Subtitle>
            <Paragraph small='true'>
                You will be signed out of your account
            </Paragraph>
        </Fragment>
    );
};

const SignOut = ({ mobile }) => {
    const { toggle } = useContext(AuthContext);
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return mobile ? (
        <Account.Flex>
            <ConfirmActionModal
                isOpen={isModalOpen}
                setModal={setModalIsOpen}
                action={toggle}
            >
                <Paragraph center='true'>
                    Are you sure you want to sign out?
                </Paragraph>
            </ConfirmActionModal>
            <Account.MobileHeader>
                <Content />
            </Account.MobileHeader>
            <Button.Inverted
                small='true'
                align='center'
                onClick={openModal}
                border='true'
            >
                Sign out
            </Button.Inverted>
        </Account.Flex>
    ) : (
        <Card>
            <ConfirmActionModal
                isOpen={isModalOpen}
                setModal={setModalIsOpen}
                action={toggle}
            >
                <Paragraph center='true'>
                    Are you sure you want to sign out?
                </Paragraph>
            </ConfirmActionModal>
            <Account.Flex>
                <Header>
                    <Content />
                </Header>
                <Button.Inverted
                    small='true'
                    align='center'
                    onClick={openModal}
                    border='true'
                >
                    Sign out
                </Button.Inverted>
            </Account.Flex>
        </Card>
    );
};

export default SignOut;
