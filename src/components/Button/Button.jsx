import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import { BREAKPOINTS } from '../../constants/breakpoints';
import { VARIANTS } from '../../constants/variants';

const AnimatedButton = ({ children, ...otherProps }) => {
    const { button } = VARIANTS;

    return (
        <motion.button
            initial='initial'
            whileHover='whileHover'
            whileTap='whileTap'
            variants={button}
            {...otherProps}
        >
            {children}
        </motion.button>
    );
};

export const Base = styled(AnimatedButton)`
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
    align-self: ${p => p.align || 'flex-start'};
    margin-top: ${p => p.margin && 'var(--padding-sm)'};
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--padding-xs) * 0.5);

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: ${p =>
            p.small ? 'var(--font-sm)' : 'calc(var(--font-md) * 1.1)'};
    }
`;

export const Inverted = styled(Base)`
    color: var(--color-orange-400);
    background-color: var(--color-gray-100);
    box-shadow: ${p => p.border && 'inset 0 0 0 1px var(--color-orange-400)'};
`;

export const Alert = styled(Inverted)`
    color: var(--color-alert);
    background-color: var(--color-alert-bg);
`;

export const Error = styled(Alert)`
    color: var(--color-error);
    background-color: var(--color-error-bg);
`;

export const InvertedXS = styled(Inverted)`
    font-size: 11px;
    padding: var(--btn-padding-small);

    svg {
        fill: var(--color-orange-400);
        max-width: 18px;
        max-height: 18px;

        @media screen and ${BREAKPOINTS.smMin} {
            max-width: 22px;
            max-height: 22px;
        }
    }

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: var(--font-xxs);
    }
`;
