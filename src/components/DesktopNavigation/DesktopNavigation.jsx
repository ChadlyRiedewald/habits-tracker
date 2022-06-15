import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { NavLink } from '../NavLink';
import { BREAKPOINTS } from '../../constants';
import { AuthContext } from '../../hooks/Auth';
import { Fragment, useContext } from 'react';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';
import { ReactComponent as SignIn } from '../../assets/login.svg';
import { ReactComponent as SignOut } from '../../assets/logout.svg';
import DesktopOnly from '../DesktopOnly';

const DesktopNavigation = () => {
    const { isAuth, toggle } = useContext(AuthContext);
    return (
        <DesktopOnly>
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
                                <NavLink
                                    onClick={toggle}
                                    to='/'
                                    className='desktop-nav-link'
                                    activeClassName='desktop-nav-link--active'
                                >
                                    <SignOut />
                                    <p>Sign out</p>
                                </NavLink>
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
    width: var(--width-navigation);
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
