import styled from 'styled-components/macro';
import { ReactComponent as Svg } from '../../assets/logo.svg';
import { BREAKPOINTS } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => navigate('/')}>
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

    @media screen and ${BREAKPOINTS.xl} {
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
