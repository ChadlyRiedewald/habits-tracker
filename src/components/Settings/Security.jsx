import { Fragment } from 'react';
import styled from 'styled-components/macro';

import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import ChangePasswordForm from './ChangePasswordForm';
import { FormWrapper } from '../FormWrapper';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';

const Security = () => {
    return (
        <Fragment>
            <MobileOnly>
                <FormWrapper>
                    <ChangePasswordForm />
                </FormWrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Header>
                        <h2>Password</h2>
                        <Paragraph small='true'>Update your password</Paragraph>
                    </Header>
                    <Card>
                        <ChangePasswordForm />
                    </Card>
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default Security;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--margin-md);
`;
