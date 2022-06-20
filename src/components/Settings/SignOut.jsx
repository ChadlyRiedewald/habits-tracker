import * as Button from '../Button';
import * as Account from './MyAccount';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Header } from '../Header';
import { Fragment } from 'react';

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

const SignOut = ({ mobile, fn }) => {
    return mobile ? (
        <Account.Flex>
            <Account.MobileHeader>
                <Content />
            </Account.MobileHeader>
            <Button.Inverted
                small='true'
                align='center'
                onClick={() => fn(true)}
                border='true'
            >
                Sign out
            </Button.Inverted>
        </Account.Flex>
    ) : (
        <Card>
            <Account.Flex>
                <Header>
                    <Content />
                </Header>
                <Button.Inverted
                    small='true'
                    align='center'
                    onClick={() => fn(true)}
                    border='true'
                >
                    Sign out
                </Button.Inverted>
            </Account.Flex>
        </Card>
    );
};

export default SignOut;
