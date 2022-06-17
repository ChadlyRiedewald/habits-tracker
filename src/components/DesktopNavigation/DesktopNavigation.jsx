import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { NavLink } from '../NavLink';
import { BREAKPOINTS } from '../../constants';
import { AuthContext } from '../../hooks/Auth.context';
import { Fragment, useContext, useState } from 'react';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';
import { ReactComponent as SignIn } from '../../assets/login.svg';
import { ReactComponent as SignOut } from '../../assets/logout.svg';
import DesktopOnly from '../DesktopOnly';
import Modal from '../Modal/Modal';
import { Paragraph } from '../Paragraph';

const DesktopNavigation = () => {
    const { isAuth, toggle } = useContext(AuthContext);
    const [openModal, toggleOpenModel] = useState(false);

    return (
        <DesktopOnly>
            <Modal
                open={openModal}
                onClose={() => toggleOpenModel(!openModal)}
                okFunction={() => toggle()}
            >
                <Paragraph center>Are you sure you want to sign out?</Paragraph>
            </Modal>
            <Wrapper>
                <Logo />
                <List>
                    <WrapListItems>
                        {isAuth && (
                            <Fragment>
                                <ListItem>
                                    <NavLink
                                        to='home'
                                        className='desktop-nav-link'
                                        activeClassName='desktop-nav-link--active'
                                    >
                                        <Home />
                                        <p>Home</p>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink
                                        to='discover'
                                        className='desktop-nav-link'
                                        activeClassName='desktop-nav-link--active'
                                    >
                                        <Discover />
                                        <p>Discover</p>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink
                                        to='settings'
                                        className='desktop-nav-link'
                                        activeClassName='desktop-nav-link--active'
                                    >
                                        <Settings />
                                        <p>Settings</p>
                                    </NavLink>
                                </ListItem>
                            </Fragment>
                        )}
                    </WrapListItems>
                    <WrapListItems>
                        <ListItem>
                            <NavLink
                                to='help'
                                className='desktop-nav-link'
                                activeClassName='desktop-nav-link--active'
                            >
                                <Help />
                                <p>Help</p>
                            </NavLink>
                        </ListItem>

                        {!isAuth && (
                            <ListItem>
                                <NavLink
                                    to='auth'
                                    className='desktop-nav-link'
                                    activeClassName='desktop-nav-link--active'
                                >
                                    <SignIn />
                                    <p>Sign in</p>
                                </NavLink>
                            </ListItem>
                        )}

                        {isAuth && (
                            <ListItem>
                                <SignOutLink
                                    onClick={() => toggleOpenModel(!openModal)}
                                >
                                    <SignOut />
                                    <p>Sign out</p>
                                </SignOutLink>
                            </ListItem>
                        )}
                    </WrapListItems>
                </List>
            </Wrapper>
        </DesktopOnly>
    );
};

export default DesktopNavigation;

const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: var(--width-nav);
    background-color: var(--color-orange-400);
    justify-content: space-between;
`;

const List = styled.ul`
    padding-block: var(--padding-md);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;

    @media screen and ${BREAKPOINTS.xl} {
        height: 90vh;
    }
`;

const ListItem = styled.li``;

const WrapListItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
`;

const SignOutLink = styled.a`
    padding-block: var(--padding-sm);
    border-left: var(--border-width-xxl) solid transparent;
    border-right: var(--border-width-xxl) solid transparent;
    color: var(--color-gray-100);
    display: flex;
    align-items: center;
    gap: var(--padding-md);
    padding-left: 15%;
    cursor: pointer;

    & svg {
        fill: var(--color-gray-100);
    }

    & p {
        font-size: var(--font-md);
    }

    @media screen and ${BREAKPOINTS.xl} {
        justify-content: center;
        padding-left: 0;

        p {
            display: none;
        }
    }
`;
