import * as Account from './MyAccount';
import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Header } from '../Header';
import { Fragment } from 'react';

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
    return mobile ? (
        <Account.Flex>
            <Account.MobileHeader>
                <Content />
            </Account.MobileHeader>
            <Button.Error small='true' align='center'>
                Delete
            </Button.Error>
        </Account.Flex>
    ) : (
        <Card>
            <Account.Flex>
                <Header>
                    <Content />
                </Header>
                <Button.Error small='true' align='center'>
                    Delete
                </Button.Error>
            </Account.Flex>
        </Card>
    );
};

export default DeleteAccount;
