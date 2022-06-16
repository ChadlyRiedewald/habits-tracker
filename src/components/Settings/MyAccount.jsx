import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly/MobileOnly';
import { FormWrapper } from '../FormWrapper';
import DesktopOnly from '../DesktopOnly/DesktopOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Fragment } from 'react';
import MyAccountForm from './MyAccountForm';
import Subtitle from '../Subtitle';
import * as B from '../Button';
import { Divider } from '../Divider';

const MyAccount = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Wrapper>
                    <FormWrapper>
                        <MyAccountForm />
                    </FormWrapper>
                    <Divider />
                    <Flex>
                        <Header>
                            <Subtitle>Reset account</Subtitle>
                            <Paragraph small>
                                If you reset your account, you will lose all of
                                your progress and data
                            </Paragraph>
                        </Header>
                        <B.Alert small alignSelf='center'>
                            Reset
                        </B.Alert>
                    </Flex>
                    <Divider />
                    <Flex>
                        <Header>
                            <Subtitle>Delete account</Subtitle>
                            <Paragraph small>
                                If you reset your account, you will lose all of
                                your progress and data
                            </Paragraph>
                        </Header>
                        <B.Error small alignSelf='center'>
                            Delete
                        </B.Error>
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
