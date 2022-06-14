import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants';

export default styled.div`
    @media screen and ${BREAKPOINTS.smMin} {
        display: none;
    }
`;
