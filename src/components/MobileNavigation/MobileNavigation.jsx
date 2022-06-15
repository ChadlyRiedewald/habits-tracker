import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import { NavLink } from '../NavLink';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { BREAKPOINTS } from '../../constants';

const MobileNavigation = () => {
    return (
        <MobileOnly>
            <Wrapper>
                <List>
                    <ListItem>
                        <NavLink
                            to='home'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Home />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='discover'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Discover />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='add-habit'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Ellipse>
                                <Plus stroke='var(--color-orange-400)' />
                            </Ellipse>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='settings'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Settings />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='help'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Help />
                        </NavLink>
                    </ListItem>
                </List>
            </Wrapper>
        </MobileOnly>
    );
};

export default MobileNavigation;

const Wrapper = styled.nav`
    width: 100vw;
    height: var(--height-mobile-nav);
    position: fixed;
    bottom: 0;
    background-color: var(--color-orange-400);
    z-index: 10;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and ${BREAKPOINTS.smMin} {
        justify-content: space-around;
    }
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Ellipse = styled.div`
    display: flex;
    background-color: var(--color-gray-100);
    width: 36px;
    height: 36px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;

    @media screen and ${BREAKPOINTS.smMin} {
        width: 42px;
        height: 42px;
    }
`;
