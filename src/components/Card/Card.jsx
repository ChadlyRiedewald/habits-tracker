import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const Card = styled.div`
    display: flex;
    width: clamp(200px, 100%, 650px);
    margin-inline: auto;

    @media screen and ${BREAKPOINTS.lgMin} {
        width: clamp(550px, 100%, 800px);
        background-color: var(--color-gray-100);
        padding: calc(var(--padding-md) * 1.5);
        border-radius: var(--border-radius-sm);
        box-shadow: var(--shadow-elevation-medium);
    }
`;
