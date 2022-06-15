import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--padding-sm);
    margin-inline: auto;

    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(280px, 75vw, 550px);
    }
`;
