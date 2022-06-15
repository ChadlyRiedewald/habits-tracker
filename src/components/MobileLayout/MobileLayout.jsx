import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { BREAKPOINTS } from '../../constants';

const MobileLayout = ({ children }) => {
    return (
        <MobileOnly>
            <OuterContainer>
                <Header center>{children}</Header>
                <InnerContainer>
                    <Outlet />
                </InnerContainer>
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
    justify-content: space-between;
    gap: var(--padding-md);
    margin-bottom: var(--height-mobile-nav);
`;

export const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    border-top-right-radius: var(--border-radius-lg);
    border-top-left-radius: var(--border-radius-lg);
    padding: calc(var(--padding-md) * 1.5);
    margin-bottom: var(--height-mobile-nav);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    @media screen and ${BREAKPOINTS.xs} {
        padding: var(--padding-sm);
    }
`;
