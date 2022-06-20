import { Fragment, useState } from 'react';
import styled from 'styled-components/macro';

import EditAccountDetails from './EditAccountDetails';
import SignOutModal from '../Modal/SignOutModal';
import ResetAccount from './ResetAccount';
import DeleteAccount from './DeleteAccount';
import SignOut from './SignOut';
import AccountDetails from './AccountDetails';
import DesktopOnly from '../DesktopOnly';
import MobileOnly from '../MobileOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { DividerHorizontal } from '../Divider';

const MyAccount = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Fragment>
            <MobileOnly>
                <SignOutModal isOpen={modalIsOpen} setModal={setModalIsOpen} />
                <Wrapper>
                    <AccountDetails />
                    <DividerHorizontal />
                    <EditAccountDetails mobile='true' />
                    <DividerHorizontal />
                    <ResetAccount mobile='true' />
                    <DividerHorizontal />
                    <DeleteAccount mobile='true' />
                    <DividerHorizontal />
                    <SignOut mobile='true' fn={setModalIsOpen} />
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
                    <SignOut fn={setModalIsOpen} />
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

////////////////// NESTED ROUTES STYLES

export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--padding-md);
`;

export const MobileHeader = styled(Header)`
    margin: 0;
`;
