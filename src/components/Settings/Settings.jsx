import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import MobileLayout from '../MobileLayout';
import DesktopLayout from '../DesktopLayout';
import Title from '../Title';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import NavLinks from './NavLinks';

const Settings = () => {
    let location = useLocation();

    return (
        <Fragment>
            <MobileLayout>
                <Header>
                    <FlexColumn>
                        {location.pathname === '/settings/my-account' ? (
                            <Fragment>
                                <Title>My Account</Title>
                                <Paragraph small='true'>
                                    Update, reset or delete your account
                                </Paragraph>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Title>Security</Title>
                                <Paragraph small='true'>
                                    Update your password
                                </Paragraph>
                            </Fragment>
                        )}
                    </FlexColumn>

                    <ButtonGroupNavigation>
                        <NavLinks mobile='true' />
                    </ButtonGroupNavigation>
                </Header>
            </MobileLayout>
            <DesktopLayout title='Settings'>
                <NavLinks />
            </DesktopLayout>
        </Fragment>
    );
};

export default Settings;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-xs) * 0.5);
`;
