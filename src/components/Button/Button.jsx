import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

export const Base = styled.button`
    font-size: var(--font-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    color: var(--color-gray-100);
    background-color: var(--color-orange-400);
    border: none;
    cursor: pointer;
    padding: ${p =>
        p.wide ? 'var(--btn-padding-wide)' : 'var(--btn-padding-normal)'};
    border-radius: ${p =>
        p.round ? 'var(--border-radius-xl)' : 'var(--border-radius-sm)'};
    transition: all 0.5s;
    box-shadow: var(--shadow-elevation-medium);
    align-self: ${p => p.alignSelf || 'flex-start'};
    margin-top: ${p => p.marginTop && 'var(--padding-sm)'};

    &:hover {
        box-shadow: var(--shadow-elevation-high);
        transform: scale(1.01);
    }

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: ${p =>
            p.small ? 'var(--font-sm)' : 'calc(var(--font-md) * 1.1)'};
    }
`;

export const Inverted = styled(Base)`
    color: var(--color-orange-400);
    background-color: var(--color-gray-100);
`;

export const Alert = styled(Base)`
    color: var(--color-alert);
    background-color: var(--color-alert-bg);
    border: 1px solid var(--color-alert);
`;

export const Error = styled(Base)`
    color: var(--color-error);
    background-color: var(--color-error-bg);
    border: 1px solid var(--color-error);
`;
