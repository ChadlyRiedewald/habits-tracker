import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

export const Paragraph = styled.p`
    color: ${p => p.orange && 'var(--color-orange-400)'};
    text-align: center;
    width: ${p => p.width};

    @media screen and ${BREAKPOINTS.lg} {
        width: 90%;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: ${p => (p.small ? 'var(--font-xs)' : 'var(--font-md)')};
    }
`;
