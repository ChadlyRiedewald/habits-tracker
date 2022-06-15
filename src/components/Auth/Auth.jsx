import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from '../NavLink';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import MobileLayout from '../MobileLayout';
import { Paragraph } from '../Paragraph';
import { Fragment } from 'react';
import DesktopOnly from '../DesktopOnly';
import styled from 'styled-components/macro';

const Auth = () => {
    let location = useLocation();

    return (
        <Fragment>
            <MobileLayout>
                <ButtonGroupNavigation>
                    <li>
                        <NavLink
                            to='sign-in'
                            className='button-group'
                            activeClassName='button-group--active'
                            exact={true}
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
                <Paragraph orange>
                    {location.pathname === '/auth'
                        ? 'Log in with your account to Fix Your Habits'
                        : 'Welcome to Fix Your Habits. Fill in your information to get started!'}
                </Paragraph>
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

export const Wrapper = styled.div`
    background-color: var(--color-gray-100);
    display: flex;
    justify-content: space-between;
    min-height: 100%;
    border-radius: var(--border-radius-lg);
    margin-inline: auto;
`;
export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: var(--padding-lg);
    flex-basis: 60%;
`;

export const SignUpContainer = styled.div`
    background-color: var(--color-orange-300);
    display: flex;
    align-items: center;
    border-top-right-radius: var(--border-radius-lg);
    border-bottom-right-radius: var(--border-radius-lg);
    padding: var(--padding-lg);
    flex-basis: 40%;
`;
