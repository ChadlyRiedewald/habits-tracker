import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants/breakpoints';

export default styled.div`
    width: ${p => p.width && '100%'};
    @media screen and ${BREAKPOINTS.lgMin} {
        display: none;
    }
`;
