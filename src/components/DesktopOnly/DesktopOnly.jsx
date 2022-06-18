import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants/breakpoints';

const DesktopOnly = styled.div`
    width: ${p => p.width && '100%'};
    @media screen and ${BREAKPOINTS.lg} {
        display: none;
    }
`;

export default DesktopOnly;
