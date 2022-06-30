import styled from 'styled-components/macro';

import Habit from './Habit';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import { Fragment } from 'react';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { ReactComponent as Add } from '../../assets/plus.svg';

const ToDo = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Wrapper>
                    <Habit
                        bgColor='var(--color-sports)'
                        habitText='Drink 2L Water'
                    />
                    <Habit
                        bgColor='var(--color-finance)'
                        habitText='Workout 30min'
                    />
                    <Habit
                        bgColor='var(--color-health)'
                        habitText='Read 10 pages'
                    />
                    <Habit
                        bgColor='var(--color-mind)'
                        habitText='Meditate 15min'
                    />
                    <Habit
                        bgColor='var(--color-hobby)'
                        habitText='Play a game'
                    />
                    <Habit
                        bgColor='var(--color-food)'
                        habitText='Eat healthy'
                    />
                </Wrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Habit
                        bgColor='var(--color-sports)'
                        habitText='Drink 2L Water'
                    />
                    <Habit
                        bgColor='var(--color-finance)'
                        habitText='Workout 30min'
                    />
                    <Habit
                        bgColor='var(--color-health)'
                        habitText='Read 10 pages'
                    />
                    <Habit
                        bgColor='var(--color-mind)'
                        habitText='Meditate 15min'
                    />
                    <Habit
                        bgColor='var(--color-hobby)'
                        habitText='Play a game'
                    />
                    <Habit
                        bgColor='var(--color-food)'
                        habitText='Eat healthy'
                    />
                    <AddHabit>
                        <Add />
                    </AddHabit>
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default ToDo;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);

    @media screen and ${BREAKPOINTS.lgMin} {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
        gap: var(--padding-sm);
    }
`;

const AddHabit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    border-radius: var(--border-radius-sm);
    box-shadow: inset 0 0 0 5px var(--color-orange-400);

    svg {
        stroke: var(--color-orange-400);
        width: 8rem;
        height: 8rem;
    }
`;
