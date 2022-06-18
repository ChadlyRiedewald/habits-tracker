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

export const OuterContainer = styled.div`
    padding-top: var(--padding-md);
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    margin-bottom: var(--height-mobile-nav);
`;

export const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    border-top-right-radius: var(--border-radius-lg);
    border-top-left-radius: var(--border-radius-lg);
    padding: calc(var(--padding-md) * 1.25);
    margin-bottom: var(--height-mobile-nav);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    @media screen and ${BREAKPOINTS.xs} {
        padding: var(--padding-sm);
    }
`;
