import Checkbox from '../Checkbox/Checkbox';
import { ReactComponent as Award } from '../../assets/award.svg';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Habit = ({ bgColor, habitText }) => {
    return (
        <Wrapper bgColor={bgColor}>
            <Flex>
                <Checkbox />
                <Divider />
                <Ellipse>
                    <Award fill={bgColor} />
                </Ellipse>
                <p>{habitText}</p>
            </Flex>
            <Options />
        </Wrapper>
    );
};

export default Habit;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${p => p.bgColor};
    padding-block: calc(var(--padding-xs) * 1.5);
    padding-inline: var(--padding-sm);
    border-radius: var(--border-radius-sm);

    @media screen and ${BREAKPOINTS.lgMin} {
        flex-direction: column;
        position: relative;
        height: 8rem;
    }
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        font-size: var(--font-xxs);

        @media screen and ${BREAKPOINTS.smMin} {
            font-size: var(--font-xs);
        }

        @media screen and ${BREAKPOINTS.lgMin} {
            font-size: 12px;
        }
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        flex-direction: column;
        text-align: center;

        input {
            display: none;
        }
    }
`;

const Divider = styled.div`
    min-height: var(--padding-md);
    min-width: 1px;
    background-color: var(--color-gray-100);

    @media screen and ${BREAKPOINTS.lgMin} {
        display: none;
    }
`;

const Ellipse = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: var(--color-gray-100);
    padding: calc(var(--padding-xxs) * 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and ${BREAKPOINTS.smMin} {
        width: 36px;
        height: 36px;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        width: 48px;
        height: 48px;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

const Options = styled.div`
    width: 4px;
    height: 4px;
    background-color: var(--color-orange-400);
    border-radius: 100%;
    position: relative;

    &::after,
    &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: var(--color-orange-400);
        border-radius: 100%;
    }

    &::before {
        margin-top: -8px;
    }

    &::after {
        margin-top: 8px;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        transform: rotate(90deg);
        position: absolute;
        right: 1.25rem;
    }
`;
