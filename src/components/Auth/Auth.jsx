import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';
import { ButtonGroup } from '../ButtonGroup';
import MobileOnly from '../MobileOnly';
import { BREAKPOINTS } from '../../constants';

const Auth = () => {
    let location = useLocation();

    return (
        <OuterContainer>
            <MobileOnly>
                <Header>
                    <ButtonGroup>
                        <NavLink
                            to=''
                            className='button-group'
                            activeClassName='button-group--active'
                            exact={true}
                        >
                            Sign in
                        </NavLink>
                        <NavLink
                            to='sign-up'
                            className='button-group'
                            activeClassName='button-group--active'
                        >
                            Sign up
                        </NavLink>
                    </ButtonGroup>
                    <Paragraph orange>
                        {location.pathname === '/auth'
                            ? 'Log in with your account to Fix Your Habits'
                            : 'Welcome to Fix Your Habits. Fill in your information to get started!'}
                    </Paragraph>
                </Header>
            </MobileOnly>
            <InnerContainer>
                <Outlet />
            </InnerContainer>
        </OuterContainer>
    );
};

export default Auth;

export const OuterContainer = styled.div`
    padding-top: var(--padding-md);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--padding-md);

    @media screen and ${BREAKPOINTS.smMin} {
        padding-top: 0;
        margin-block: auto;
        padding-inline: var(--padding-md);
        padding-block: var(--padding-lg);
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--padding-sm);
    padding-inline: calc(var(--padding-md) * 1.5);

    @media screen and ${BREAKPOINTS.smMin} {
        padding-inline: 0;
    }
`;

export const Paragraph = styled.p`
    color: ${p => p.orange && 'var(--color-orange-400)'};
    font-size: ${p => p.big && 'var(--font-md)'};
    text-align: center;
    @media screen and ${BREAKPOINTS.sm} {
        width: 90%;
    }
`;

export const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    border-top-right-radius: var(--border-radius-lg);
    border-top-left-radius: var(--border-radius-lg);
    padding: calc(var(--padding-md) * 1.5);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    @media screen and ${BREAKPOINTS.smMin} {
        height: 100%;
        background-color: var(--color-gray-200);
        border-radius: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

// SIGN IN & SIGN UP PAGE STYLES
export const Wrapper = styled.div`
    @media screen and ${BREAKPOINTS.smMin} {
        background-color: var(--color-gray-100);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: min(100%, 550px);
        height: clamp(400px, 100%, 800px);
        border-radius: var(--border-radius-lg);
    }

    @media screen and ${BREAKPOINTS.mdMin} {
        max-width: min(100%, 1200px);
        width: 100%;
        flex-direction: row;
    }
`;
export const SignInContainer = styled.div`
    @media screen and ${BREAKPOINTS.smMin} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        padding: var(--padding-lg);
    }

    @media screen and ${BREAKPOINTS.mdMin} {
        padding: calc(var(--padding-lg) * 1.5);
        flex-basis: 65%;
    }
`;
export const SignUpContainer = styled.div`
    @media screen and ${BREAKPOINTS.smMin} {
        background-color: var(--color-orange-300);
        border-bottom-left-radius: var(--border-radius-lg);
        border-bottom-right-radius: var(--border-radius-lg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: calc(var(--padding-md) * 1.5);
    }

    @media screen and ${BREAKPOINTS.mdMin} {
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--border-radius-lg);
        border-bottom-right-radius: var(--border-radius-lg);
        padding: var(--padding-lg);
        padding-inline: calc(var(--padding-lg) * 1.25);
        flex-basis: 35%;
    }
`;

export const Title = styled.h2`
    font-size: var(--font-xxl);
`;
