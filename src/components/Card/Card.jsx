import styled from 'styled-components/macro';

export const Card = styled.div`
    display: flex;
    width: clamp(550px, 100%, 800px);
    background-color: var(--color-gray-100);
    padding: calc(var(--padding-md) * 1.5);
    border-radius: var(--border-radius-sm);
`;
