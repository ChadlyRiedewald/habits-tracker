import MobileLayout from '../MobileLayout';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';
import { Fragment } from 'react';
import DesktopLayout from '../DesktopLayout';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import Title from '../Title';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';

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
                                <Paragraph small>
                                    Update, reset or delete your account
                                </Paragraph>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Title>Security</Title>
                                <Paragraph small>
                                    Update your password
                                </Paragraph>
                            </Fragment>
                        )}
                    </FlexColumn>

                    <ButtonGroupNavigation>
                        <li>
                            <NavLink
                                to='my-account'
                                className='button-group'
                                activeClassName='button-group--active'
                                exact={true}
                            >
                                Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='security'
                                className='button-group'
                                activeClassName='button-group--active'
                            >
                                Security
                            </NavLink>
                        </li>
                    </ButtonGroupNavigation>
                </Header>
            </MobileLayout>
            <DesktopLayout title='Settings'>
                <li>
                    <NavLink
                        to='my-account'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='security'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        Security
                    </NavLink>
                </li>
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
