import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly/MobileOnly';
import { FormWrapper } from '../FormWrapper';
import DesktopOnly from '../DesktopOnly/DesktopOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Fragment, useState } from 'react';
import MyAccountForm from './MyAccountForm';
import Subtitle from '../Subtitle';
import * as B from '../Button';
import { Divider } from '../Divider';
import SignOutModal from '../Modal/SignOutModal';

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
                    <Flex>
                        <MobileHeader>
                            <Subtitle>Reset account</Subtitle>
                            <Paragraph small>
                                If you reset your account, you will lose all of
                                your progress and data
                            </Paragraph>
                        </MobileHeader>
                        <B.Alert small alignSelf='center'>
                            Reset
                        </B.Alert>
                    </Flex>
                    <Divider />
                    <Flex>
                        <MobileHeader>
                            <Subtitle>Delete account</Subtitle>
                            <Paragraph small>
                                If you reset your account, you will lose all of
                                your progress and data
                            </Paragraph>
                        </MobileHeader>
                        <B.Error small alignSelf='center'>
                            Delete
                        </B.Error>
                    </Flex>
                    <Divider />
                    <Flex>
                        <MobileHeader>
                            <Subtitle>Signout</Subtitle>
                            <Paragraph small>
                                You will be signed out of your account
                            </Paragraph>
                        </MobileHeader>
                        <B.Inverted
                            small
                            alignSelf='center'
                            onClick={() => setModalIsOpen(true)}
                            border
                        >
                            Sign out
                        </B.Inverted>
                    </Flex>
                </Wrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Header>
                        <h2>General details</h2>
                        <Paragraph small>
                            Update your personal information, reset or delete
                            your account
                        </Paragraph>
                    </Header>
                    <Card>
                        <MyAccountForm />
                    </Card>
                    <Card>
                        <Flex>
                            <Header>
                                <Subtitle>Reset account</Subtitle>
                                <Paragraph small>
                                    If you reset your account, you will lose all
                                    of your progress and data
                                </Paragraph>
                            </Header>
                            <B.Alert small alignSelf='center'>
                                Reset
                            </B.Alert>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex>
                            <Header>
                                <Subtitle>Delete account</Subtitle>
                                <Paragraph small>
                                    If you delete your account, all your data
                                    will be gone forever
                                </Paragraph>
                            </Header>
                            <B.Error small alignSelf='center'>
                                Delete
                            </B.Error>
                        </Flex>
                    </Card>
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
