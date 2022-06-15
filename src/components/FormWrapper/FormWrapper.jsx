import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

export const FormWrapper = styled.div`
    margin-inline: auto;
    width: clamp(200px, 75vw, 650px);

    @media screen and ${BREAKPOINTS.lgMin} {
        width: 80%;
    }
`;
