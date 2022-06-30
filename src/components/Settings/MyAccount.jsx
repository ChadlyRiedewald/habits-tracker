import { Fragment } from 'react';
import styled from 'styled-components/macro';

import EditAccountDetails from './EditAccountDetails';
import ResetAccount from './ResetAccount';
import DeleteAccount from './DeleteAccount';
import SignOut from './SignOut';
import AccountDetails from './AccountDetails';
import DesktopOnly from '../DesktopOnly';
import MobileOnly from '../MobileOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { DividerHorizontal } from '../Divider';
import { BREAKPOINTS } from '../../constants/breakpoints';

const MyAccount = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Wrapper>
                    <AccountDetails />
                    <DividerHorizontal />
                    <EditAccountDetails mobile='true' />
                    <DividerHorizontal />
                    <ResetAccount mobile='true' />
                    <DividerHorizontal />
                    <DeleteAccount mobile='true' />
                    <DividerHorizontal />
                    <SignOut mobile='true' />
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
                    <AccountDetails />
                    <EditAccountDetails />
                    <ResetAccount />
                    <DeleteAccount />
                    <SignOut />
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default MyAccount;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--margin-md);

    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(200px, 100%, 650px);
        margin-inline: auto;
    }
`;

////////////////// NESTED ROUTES STYLES

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--padding-md);
    min-width: 100%;
`;

export const MobileHeader = styled(Header)`
    margin: 0;
`;
