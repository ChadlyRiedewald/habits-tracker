import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const FormWrapper = styled.div`
    width: clamp(200px, 100%, 650px);
    margin-inline: auto;

    @media screen and ${BREAKPOINTS.lgMin} {
        width: 80%;
    }
`;
