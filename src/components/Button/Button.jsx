import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, ...otherProps }) => {
    const buttonVariants = {
        hover: {
            scale: 1.05,
        },
        pressed: {
            scale: 0.9,
        },
        rest: {
            scale: 1,
        },
    };

    return (
        <motion.button
            initial='rest'
            whileHover='hover'
            whileTap='pressed'
            variants={buttonVariants}
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
    box-shadow: ${p => p.border && 'inset 0 0 0 1px var(--color-orange-400)'};
`;

export const Alert = styled(Inverted)`
    color: var(--color-alert);
    background-color: var(--color-alert-bg);
`;

export const Error = styled(Alert)`
    font-size: ${p => p.xs && 'var(--font-xxs)'};
    color: var(--color-error);
    background-color: var(--color-error-bg);
`;
