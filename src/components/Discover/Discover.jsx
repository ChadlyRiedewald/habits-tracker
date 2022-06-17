import MobileLayout from '../MobileLayout';
import { Fragment } from 'react';
import { Header } from '../Header';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';
import styled from 'styled-components/macro';
import DesktopOnly from '../DesktopOnly';
import { Outlet } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Discover = () => {
    return (
        <Fragment>
            <MobileLayout discover={true}>
                <Header center={true}>
                    <ButtonGroupNavigation>
                        <li>
                            <NavLink
                                to='discover'
                                className='button-group'
                                activeClassName='button-group--active'
                                exact={true}
                            >
                                Discover
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='all'
                                className='button-group'
                                activeClassName='button-group--active'
                                exact={true}
                            >
                                All
                            </NavLink>
                        </li>
                    </ButtonGroupNavigation>
                </Header>
            </MobileLayout>
            <DesktopOnly>
                <OuterContainer>
                    <Header>
                        <nav>
                            <List>
                                <li>
                                    <NavLink
                                        to='discover'
                                        className='discover-link'
                                        activeClassName='discover-link--active'
                                    >
                                        Discover
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='all'
                                        className='discover-link'
                                        activeClassName='discover-link--active'
                                    >
                                        All
                                    </NavLink>
                                </li>
                            </List>
                        </nav>
                    </Header>
                    <InnerContainer>
                        <Outlet />
                    </InnerContainer>
                </OuterContainer>
            </DesktopOnly>
        </Fragment>
    );
};

export default Discover;

//////// DESKTOP STYLES

const OuterContainer = styled.div`
    width: calc(100vw - var(--width-nav));
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-md) * 1.5);
    padding-inline: calc(var(--padding-md) * 1.5);
    padding-block: var(--padding-md);
    overflow: auto;
`;

const InnerContainer = styled.div`
    display: flex;
`;

const List = styled.ul`
    display: flex;
    gap: calc(var(--padding-lg) * 1.5);
`;

////////// NESTED ROUTES STYLES

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: calc(var(--padding-md) * 1.25);
    gap: calc(var(--padding-md) * 1.25);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
`;

export const Card = styled.div`
    display: flex;
    height: 256px;
    background-color: var(--color-gray-100);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-low);

    @media screen and ${BREAKPOINTS.lg} {
        height: 128px;
        width: 128px;
    }
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--padding-xxl), 1fr));
    grid-gap: var(--padding-md);
`;
export const Banner = styled.div`
    background-color: var(--color-gray-100);
    flex: 1 1 100%;
    min-height: 320px;
    width: 100%;
    border-radius: var(--border-radius-sm);
`;
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: ${p => p.paddingTop && 'calc(var(--margin-md) * 1.25)'};
`;
