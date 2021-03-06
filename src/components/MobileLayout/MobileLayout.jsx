import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

import MobileOnly from '../MobileOnly';
import { BREAKPOINTS } from '../../constants/breakpoints';

const MobileLayout = ({ children, discover }) => {
    return (
        <MobileOnly>
            <OuterContainer>
                {children}
                {discover ? (
                    <Outlet />
                ) : (
                    <InnerContainer>
                        <Outlet />
                    </InnerContainer>
                )}
            </OuterContainer>
        </MobileOnly>
    );
};

export default MobileLayout;

const OuterContainer = styled.div`
    padding-top: var(--padding-md);
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    border-top-right-radius: var(--border-radius-lg);
    border-top-left-radius: var(--border-radius-lg);
    padding: calc(var(--padding-md) * 1.25);
    margin-bottom: var(--height-mobile-nav);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    @media screen and ${BREAKPOINTS.sm} {
        padding-inline: calc(var(--padding-sm) * 1.5);
        padding-block: calc(var(--padding-sm) * 1.75);
    }
`;
