import { Card, Wrapper } from './Discover';
import styled from 'styled-components/macro';
import FilterDropdownMenu from './FilterDropdownMenu';

const All = () => {
    return (
        <Wrapper>
            <FilterDropdownMenu />
            <Flex>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Flex>
        </Wrapper>
    );
};

export default All;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;
