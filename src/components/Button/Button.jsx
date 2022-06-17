import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

export const Base = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${p => (p.small ? 'var(--font-xxs)' : 'var(--font-sm)')};
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
    align-self: ${p => p.alignSelf || 'flex-start'};
    margin-top: ${p => p.marginTop && 'var(--padding-sm)'};
    flex-shrink: 0;

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: ${p =>
            p.small ? 'var(--font-sm)' : 'calc(var(--font-md) * 1.1)'};
    }
`;

export const Inverted = styled(Base)`
    color: var(--color-orange-400);
    background-color: var(--color-gray-100);
    box-shadow: inset 0 0 0 1px var(--color-orange-400);

    &.filter {
        font-weight: var(--font-weight-normal);
        padding: var(--padding-xs) var(--padding-sm);

        svg {
            fill: var(--color-orange-400);
            width: 18px;
            height: 18px;
        }
    }
`;

export const Alert = styled(Base)`
    color: var(--color-alert);
    background-color: var(--color-alert-bg);
    box-shadow: inset 0 0 0 1px var(--color-alert);
`;

export const Error = styled(Alert)`
    font-size: ${p => p.xs && 'var(--font-xxs)'};
    color: var(--color-error);
    background-color: var(--color-error-bg);
    box-shadow: inset 0 0 0 1px var(--color-error);
`;

export const Success = styled(Alert)`
    font-size: ${p => p.xs && 'var(--font-xxs)'};
    color: var(--color-success);
    background-color: var(--color-success-bg);
    box-shadow: inset 0 0 0 1px var(--color-success);
`;
