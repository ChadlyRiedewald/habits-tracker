import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${p => (p.center ? 'center' : 'flex-start')};
    gap: var(--padding-sm);
    margin-inline: auto;

    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(200px, 85vw, 550px);
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        margin: 0;
        gap: var(--padding-xs);
    }
`;
