import { Fragment, useState } from 'react';
import styled from 'styled-components/macro';

import * as Button from '../Button';
import MyAccountForm from './MyAccountForm';
import SignOutModal from '../Modal/SignOutModal';
import AccountReset from './AccountReset';
import AccountDelete from './AccountDelete';
import DesktopOnly from '../DesktopOnly';
import MobileOnly from '../MobileOnly';
import Subtitle from '../Subtitle';
import { FormWrapper } from '../FormWrapper';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Divider } from '../Divider';

const MyAccount = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Fragment>
            <MobileOnly>
                <SignOutModal isOpen={modalIsOpen} setModal={setModalIsOpen} />
                <Wrapper>
                    <FormWrapper>
                        <MyAccountForm />
                    </FormWrapper>
                    <Divider />
                    <AccountReset mobile='true' />
                    <Divider />
                    <AccountDelete mobile='true' />
                    <Divider />
                    <Flex>
                        <MobileHeader>
                            <Subtitle>Signout</Subtitle>
                            <Paragraph small='true'>
                                You will be signed out of your account
                            </Paragraph>
                        </MobileHeader>
                        <Button.Inverted
                            small='true'
                            align='center'
                            onClick={() => setModalIsOpen(true)}
                            border='true'
                        >
                            Sign out
                        </Button.Inverted>
                    </Flex>
                </Wrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Header>
                        <h2>General details</h2>
                        <Paragraph small='true'>
                            Update your personal information, reset or delete
                            your account
                        </Paragraph>
                    </Header>
                    <Card>
                        <MyAccountForm />
                    </Card>
                    <AccountReset />
                    <AccountDelete />
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default MyAccount;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--margin-md);
`;

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--padding-lg);
`;

const MobileHeader = styled(Header)`
    margin: 0;
`;
