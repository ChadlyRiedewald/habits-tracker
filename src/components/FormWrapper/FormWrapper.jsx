import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

export const FormWrapper = styled.div`
    margin-inline: auto;
    max-width: 100%;
    width: clamp(200px, 85vw, 650px);

    @media screen and ${BREAKPOINTS.lgMin} {
        width: 80%;
    }
`;
