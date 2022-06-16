import MobileLayout from '../MobileLayout';
import { Fragment } from 'react';
import DesktopLayout from '../DesktopLayout';
import { Header } from '../Header';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';
import styled from 'styled-components/macro';

const Discover = () => {
    return (
        <Fragment>
            <MobileLayout discover>
                <Header center>
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
        </Fragment>
    );
};

export default Discover;

export const Wrapper = styled.div`
    margin-inline: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-inline: calc(var(--padding-md) * 1.25);
    gap: calc(var(--padding-md) * 1.25);
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
`;

export const Card = styled.div`
    display: flex;
    height: 128px;
    width: 128px;
    background-color: var(--color-gray-100);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-low);
`;
