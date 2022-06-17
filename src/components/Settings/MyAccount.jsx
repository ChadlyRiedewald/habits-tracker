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
import * as Button from '../Button';
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
                            <Paragraph small={true}>
                                If you reset your account, you will lose all of
                                your progress and data
                            </Paragraph>
                        </MobileHeader>
                        <Button.Alert small={true} alignSelf='center'>
                            Reset
                        </Button.Alert>
                    </Flex>
                    <Divider />
                    <Flex>
                        <MobileHeader>
                            <Subtitle>Delete account</Subtitle>
                            <Paragraph small={true}>
                                If you reset your account, you will lose all of
                                your progress and data
                            </Paragraph>
                        </MobileHeader>
                        <Button.Error small={true} alignSelf='center'>
                            Delete
                        </Button.Error>
                    </Flex>
                    <Divider />
                    <Flex>
                        <MobileHeader>
                            <Subtitle>Signout</Subtitle>
                            <Paragraph small={true}>
                                You will be signed out of your account
                            </Paragraph>
                        </MobileHeader>
                        <Button.Inverted
                            small={true}
                            alignSelf='center'
                            onClick={() => setModalIsOpen(true)}
                            border={true}
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
                        <Paragraph small={true}>
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
                                <Paragraph small={true}>
                                    If you reset your account, you will lose all
                                    of your progress and data
                                </Paragraph>
                            </Header>
                            <Button.Alert small={true} alignSelf='center'>
                                Reset
                            </Button.Alert>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex>
                            <Header>
                                <Subtitle>Delete account</Subtitle>
                                <Paragraph small={true}>
                                    If you delete your account, all your data
                                    will be gone forever
                                </Paragraph>
                            </Header>
                            <Button.Error small={true} alignSelf='center'>
                                Delete
                            </Button.Error>
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
