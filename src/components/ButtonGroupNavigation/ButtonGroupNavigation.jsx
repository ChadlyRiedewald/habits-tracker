import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';

export const ButtonGroupNavigation = ({ children }) => {
    return (
        <Nav>
            <List>{children}</List>
        </Nav>
    );
};

const Nav = styled.nav`
    margin-top: ${p => (p.marginTop ? '1rem' : '0')};
    display: flex;
    width: 100%;
`;

const List = styled.ul`
    display: flex;
    width: 100%;

    & li:first-child ${NavLink} {
        border-top-left-radius: var(--border-radius-sm);
        border-bottom-left-radius: var(--border-radius-sm);
    }

    & li:last-child ${NavLink} {
        border-top-right-radius: var(--border-radius-sm);
        border-bottom-right-radius: var(--border-radius-sm);
    }
`;
