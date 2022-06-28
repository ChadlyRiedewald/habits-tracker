import styled from 'styled-components/macro';
import Habit from './Habit';

const Completed = () => {
    return (
        <Wrapper>
            <Habit bgColor='var(--color-mind)' habitText='Meditate 15min' />
            <Habit bgColor='var(--color-hobby)' habitText='Game 30min' />
            <Habit bgColor='var(--color-food)' habitText='Eat healthy' />
        </Wrapper>
    );
};

export default Completed;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`;
