import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import { Fragment } from 'react';
import { NavLink } from '../NavLink';
import { Outlet } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants';

const Faq = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Wrapper>
                    <nav>
                        <List>
                            <li>
                                <NavLink
                                    to='account'
                                    className='mobile-faq-link'
                                    activeClassName='mobile-faq-link--active'
                                >
                                    Account
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='rewards'
                                    className='mobile-faq-link'
                                    activeClassName='mobile-faq-link--active'
                                >
                                    Rewards
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='habits'
                                    className='mobile-faq-link'
                                    activeClassName='mobile-faq-link--active'
                                >
                                    Habits
                                </NavLink>
                            </li>
                        </List>
                    </nav>
                    <Outlet />
                </Wrapper>
            </MobileOnly>
        </Fragment>
    );
};

export default Faq;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--margin-md);
`;

const List = styled.ul`
    display: flex;
    text-align: center;
`;

export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);

    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(248px, 85vw, 800px);
        margin-inline: auto;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        gap: calc(var(--padding-sm) * 1.5);
    }
`;
