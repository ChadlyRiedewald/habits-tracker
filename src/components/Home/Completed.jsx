import styled from 'styled-components/macro';
import Habit from './Habit';
import { BREAKPOINTS } from '../../constants/breakpoints';

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

    @media screen and ${BREAKPOINTS.lgMin} {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
        justify-content: start;
        align-content: center;
        gap: var(--padding-sm);
    }
`;
