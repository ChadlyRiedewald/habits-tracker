import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Subtitle = styled.h3`
    @media screen and ${BREAKPOINTS.sm} {
        font-size: var(--font-md);
    }
`;

export default Subtitle;
