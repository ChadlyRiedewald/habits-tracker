import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;

    & > ${NavLink}:first-child {
        border-top-left-radius: var(--border-radius-sm);
        border-bottom-left-radius: var(--border-radius-sm);
    }

    & > ${NavLink}:last-child {
        border-top-right-radius: var(--border-radius-sm);
        border-bottom-right-radius: var(--border-radius-sm);
    }
`;