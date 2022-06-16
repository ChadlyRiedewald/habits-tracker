import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

const Title = styled.h2`
    @media screen and ${BREAKPOINTS.sm} {
        font-size: var(--font-lg);
    }
`;

export default Title;