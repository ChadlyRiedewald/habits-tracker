import styled from 'styled-components/macro';

import Habit from './Habit';

const ToDo = () => {
    return (
        <Wrapper>
            <Habit bgColor='var(--color-sports)' habitText='Drink 2L Water' />
            <Habit bgColor='var(--color-finance)' habitText='Workout 30min' />
            <Habit bgColor='var(--color-health)' habitText='Read 10 pages' />
            <Habit bgColor='var(--color-mind)' habitText='Meditate 15min' />
            <Habit bgColor='var(--color-hobby)' habitText='Play a game' />
            <Habit bgColor='var(--color-food)' habitText='Eat healthy' />
        </Wrapper>
    );
};

export default ToDo;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`;
