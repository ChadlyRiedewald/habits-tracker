import styled from 'styled-components/macro';

const Ellipse = styled.div`
    display: flex;
    background-color: ${p => (p.bgColor ? p.bgColor : 'var(--color-gray-100)')};
    width: 42px;
    height: 42px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
`;

export default Ellipse;
