import * as Button from '../Button';
import * as Account from './MyAccount';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import { Card } from '../Card';
import { Fragment } from 'react';

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
    return mobile ? (
        <Account.Flex>
            <Account.MobileHeader>
                <Content />
            </Account.MobileHeader>
            <Button.Alert small='true' align='center'>
                Reset
            </Button.Alert>
        </Account.Flex>
    ) : (
        <Card>
            <Account.Flex>
                <Header>
                    <Content />
                </Header>
                <Button.Alert small='true' align='center'>
                    Reset
                </Button.Alert>
            </Account.Flex>
        </Card>
    );
};

export default ResetAccount;
