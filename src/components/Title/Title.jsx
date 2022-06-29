import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Title = styled.h2`
    @media screen and ${BREAKPOINTS.sm} {
        font-size: var(--font-lg);
    }

    span {
        color: var(--color-orange-600);
    }
`;

export default Title;
