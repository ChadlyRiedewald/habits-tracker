import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import Ellipse from '../Ellipse';
import { NavLink } from '../NavLink';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const NavigationMobile = () => {
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

export default NavigationMobile;

const Wrapper = styled.nav`
    width: 100vw;
    position: fixed;
    bottom: 0;
    background-color: var(--color-orange-400);
`;

const List = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const ListItem = styled.li`
    display: flex;

    svg {
        fill: var(--color-gray-100);
        display: flex;
        width: 30px;
        height: 30px;
    }
`;
