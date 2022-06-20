import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const FormWrapper = styled.div`
    width: 100%;

    @media screen and ${BREAKPOINTS.smMin} {
        width: clamp(200px, 85vw, 650px);
        margin-inline: auto;
    }
`;
