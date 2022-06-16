import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly/MobileOnly';
import { FormWrapper } from '../FormWrapper';
import DesktopOnly from '../DesktopOnly/DesktopOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Fragment } from 'react';
import MyAccountForm from './MyAccountForm';

const MyAccount = () => {
    return (
        <Fragment>
            <MobileOnly>
                <FormWrapper>
                    <MyAccountForm />
                </FormWrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Header>
                        <h2>General Details</h2>
                        <Paragraph small>
                            Update your personal information, reset or delete
                            your account
                        </Paragraph>
                    </Header>
                    <Card>
                        <MyAccountForm />
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
    gap: var(--margin-lg);
`;
