import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import Ellipse from '../Ellipse';
import { NavLink } from '../NavLink';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';

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
                            to=''
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Discover />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to=''
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Ellipse />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to=''
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Settings />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to=''
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
`;

const ListItem = styled.li`
    display: flex;
    justify-content: center;
    width: 100%;

    svg {
        fill: var(--color-gray-100);
        display: flex;
        width: 40px;
        height: 40px;
    }
`;
