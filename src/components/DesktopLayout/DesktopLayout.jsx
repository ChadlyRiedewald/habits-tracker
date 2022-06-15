import DesktopOnly from '../DesktopOnly';
import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

const DesktopLayout = ({ children }) => {
    return (
        <DesktopOnly>
            <OuterContainer>
                <Header>{children}</Header>
                <InnerContainer>
                    <Outlet />
                </InnerContainer>
            </OuterContainer>
        </DesktopOnly>
    );
};

export default DesktopLayout;

const OuterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--padding-md);
    margin-block: auto;
    padding-inline: var(--padding-md);
    padding-block: var(--padding-lg);
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: var(--color-gray-200);
    display: flex;
    justify-content: center;
    align-items: center;
`;
