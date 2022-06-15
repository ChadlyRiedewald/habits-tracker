import DesktopOnly from '../DesktopOnly';
import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';

const DesktopLayout = ({ title, children }) => {
    return (
        <DesktopOnly>
            <OuterContainer>
                <Navigation>
                    <h2>{title}</h2>
                    <List>{children}</List>
                </Navigation>
                <InnerContainer>
                    <Outlet />
                </InnerContainer>
            </OuterContainer>
        </DesktopOnly>
    );
};

export default DesktopLayout;

const OuterContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Navigation = styled.nav`
    min-width: 300px;
    background-color: var(--color-gray-100);
    padding-inline: calc(var(--padding-md) * 1.5);
    padding-block: var(--padding-md);
`;

const List = styled.ul`
    margin-top: var(--margin-lg);
    gap: var(--margin-md);
    display: flex;
    flex-direction: column;

    & li {
        display: flex;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100vw - var(--width-nav) - 300px);
    height: 100vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding-inline: calc(var(--padding-md) * 1.5);
    padding-block: var(--padding-md);
`;
