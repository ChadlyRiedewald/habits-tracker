import styled from 'styled-components/macro';

import Habit from './Habit';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import { Fragment } from 'react';
import { BREAKPOINTS } from '../../constants/breakpoints';

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
        justify-content: start;
        align-content: center;
        gap: var(--padding-sm);
    }
`;
