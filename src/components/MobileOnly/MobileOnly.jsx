import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants/breakpoints';

const MobileOnly = styled.div`
    width: ${p => p.width && '100%'};
    @media screen and ${BREAKPOINTS.lgMin} {
        display: none;
    }
`;

export default MobileOnly;
