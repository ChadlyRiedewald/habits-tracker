import styled from 'styled-components/macro';
import { ReactComponent as Svg } from '../../assets/logo.svg';
import { BREAKPOINTS } from '../../constants';

export const Logo = () => {
    return (
        <Wrapper>
            <Svg />
            <Title>Fix Your Habits</Title>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    height: 15vh;
    padding-top: var(--padding-md);

    @media screen and ${BREAKPOINTS.lg} {
        height: 10vh;

        h1 {
            display: none;
        }
    }
`;

const Title = styled.h1`
    color: var(--color-gray-100);
    font-size: var(--font-md);
`;
