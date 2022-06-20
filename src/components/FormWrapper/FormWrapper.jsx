import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const FormWrapper = styled.div`
    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(200px, 85vw, 650px);
        margin-inline: auto;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        min-width: 100%;
    }
`;
