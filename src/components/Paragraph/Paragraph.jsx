import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const Paragraph = styled.p`
    color: ${p => p.orange && 'var(--color-orange-400)'};
    text-align: ${p => (p.center ? 'center' : 'flex-start')};
    width: ${p => p.width};
    font-size: ${p => p.fontSize};

    @media screen and ${BREAKPOINTS.lg} {
        //width: 90%;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: ${p => (p.small ? 'var(--font-xs)' : 'var(--font-md)')};
    }
`;
