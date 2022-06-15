import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

const Ellipse = styled.div`
    display: flex;
    background-color: ${p => (p.bgColor ? p.bgColor : 'var(--color-gray-100)')};
    width: 36px;
    height: 36px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;

    @media screen and ${BREAKPOINTS.smMin} {
        width: 42px;
        height: 42px;
    }
`;

export default Ellipse;
