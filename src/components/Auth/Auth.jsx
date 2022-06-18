import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import MobileLayout from '../MobileLayout';
import DesktopOnly from '../DesktopOnly';
import { NavLink } from '../NavLink';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';

const Auth = () => {
    let location = useLocation();

    return (
        <Fragment>
            <MobileLayout>
                <Header center='true'>
                    <ButtonGroupNavigation>
                        <li>
                            <NavLink
                                to='sign-in'
                                className='button-group'
                                activeClassName='button-group--active'
                                exact='true'
                            >
                                Sign in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='sign-up'
                                className='button-group'
                                activeClassName='button-group--active'
                            >
                                Sign up
                            </NavLink>
                        </li>
                    </ButtonGroupNavigation>
                    <Paragraph orange='true' center='true'>
                        {location.pathname === '/auth/sign-in'
                            ? 'Log in with your account to Fix Your Habits'
                            : 'Welcome to Fix Your Habits. Fill in your information to get started!'}
                    </Paragraph>
                </Header>
            </MobileLayout>
            <DesktopOnly>
                <InnerContainer>
                    <Outlet />
                </InnerContainer>
            </DesktopOnly>
        </Fragment>
    );
};

export default Auth;

const InnerContainer = styled.div`
    padding: var(--padding-lg);
    width: calc(100vw - var(--width-nav));
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

///////////////////// CHILDREN REUSABLE STYLES
export const Wrapper = styled.div`
    background-color: var(--color-gray-100);
    display: flex;
    justify-content: space-between;
    min-height: 100%;
    border-radius: var(--border-radius-lg);
    margin-inline: auto;
`;
export const SignInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: var(--padding-lg);
    flex-basis: 60%;
`;

export const SignUpWrapper = styled.div`
    background-color: var(--color-orange-300);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: var(--border-radius-lg);
    border-bottom-right-radius: var(--border-radius-lg);
    padding: var(--padding-lg);
    flex-basis: 40%;
`;
