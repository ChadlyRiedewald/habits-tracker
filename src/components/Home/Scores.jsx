import styled from 'styled-components/macro';
import { Paragraph } from '../Paragraph';
import ProgressCircle from './ProgressCircle';

const Scores = () => {
    return (
        <Wrapper>
            <Flex>
                <HalfWrapper>
                    <Paragraph>Today</Paragraph>
                    <Card>
                        <ProgressCircle
                            size='50'
                            progress='40'
                            strokeWidth='5'
                        />
                        <FlexColumn>
                            <TextWrapper>
                                <P>
                                    <span>20</span>
                                </P>
                                <P>Total</P>
                            </TextWrapper>
                            <TextWrapper>
                                <P>
                                    <span>8</span>
                                </P>
                                <P>Completed</P>
                            </TextWrapper>
                            <TextWrapper>
                                <P>
                                    <span>12</span>
                                </P>
                                <P>To do</P>
                            </TextWrapper>
                        </FlexColumn>
                    </Card>
                </HalfWrapper>
                <HalfWrapper>
                    <Paragraph>This Week</Paragraph>
                    <Card>
                        <ProgressCircle
                            size='50'
                            progress='65'
                            strokeWidth='5'
                        />
                        <FlexColumn>
                            <TextWrapper>
                                <P>
                                    <span>89</span>
                                </P>
                                <P>Total</P>
                            </TextWrapper>
                            <TextWrapper>
                                <P>
                                    <span>57</span>
                                </P>
                                <P>Completed</P>
                            </TextWrapper>
                            <TextWrapper>
                                <P>
                                    <span>32</span>
                                </P>
                                <P>To do</P>
                            </TextWrapper>
                        </FlexColumn>
                    </Card>
                </HalfWrapper>
            </Flex>
            <FlexColumn>
                <p>Statistics</p>
                <StatsWrapper>
                    <Statistic bg='var(--color-orange-500)'>
                        <p>Completed</p>
                        <span>523</span>
                    </Statistic>
                    <Statistic bg='var(--color-orange-500)'>
                        <p>Perfect days</p>
                        <span>37</span>
                    </Statistic>
                    <Statistic bg='var(--color-orange-500)'>
                        <p>Days active</p>
                        <span>126</span>
                    </Statistic>
                    <Statistic bg='var(--color-orange-500)'>
                        <p>Rewards</p>
                        <span>8</span>
                    </Statistic>
                </StatsWrapper>
            </FlexColumn>
            <FlexColumn>
                <p>Rewards</p>
            </FlexColumn>
        </Wrapper>
    );
};

export default Scores;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`;

const HalfWrapper = styled(FlexColumn)`
    flex: 0 0 47.5%;
`;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-gray-100);
    padding: calc(var(--padding-xs) * 1.5);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-medium);
`;

const P = styled(Paragraph)`
    font-size: 10px;

    span {
        font-weight: var(--font-weight-bold);
        font-size: 12px;
    }
`;

const TextWrapper = styled(Flex)`
    gap: var(--padding-xs);
    align-items: center;
`;

const StatsWrapper = styled(Flex)`
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const Statistic = styled.div`
    //width: clamp(75px, 100%, 150px);
    width: 70px;
    //height: clamp(75px, 100%, 150px);
    height: 70px;
    color: var(--color-gray-100);
    background-color: ${p => p.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-medium);

    p {
        font-size: 10px;
    }

    span {
        font-size: 28px;
    }
`;
