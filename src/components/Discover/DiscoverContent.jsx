import { Card, Wrapper } from './Discover';
import styled from 'styled-components/macro';
import Subtitle from '../Subtitle';

const DiscoverContent = () => {
    return (
        <Wrapper>
            <Flex>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Flex>
            <FlexColumn>
                <Subtitle>Popular</Subtitle>
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
            </FlexColumn>
        </Wrapper>
    );
};

export default DiscoverContent;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;
