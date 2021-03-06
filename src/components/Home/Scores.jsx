import styled from 'styled-components/macro';
import { Paragraph } from '../Paragraph';
import ProgressCircle from './ProgressCircle';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { ReactComponent as Award } from '../../assets/award.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Diamond } from '../../assets/diamond.svg';

const Scores = () => {
    return (
        <Wrapper>
            <Flex>
                <HalfWrapper>
                    <Paragraph>Today</Paragraph>
                    <Card>
                        <ProgressCircle
                            size='55'
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
                            size='55'
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
                <Paragraph>All time</Paragraph>
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
                <Paragraph>Rewards</Paragraph>
                <RewardsWrapper>
                    <Ellipse bgColor='var(--color-sports)'>
                        <Award />
                    </Ellipse>
                    <Ellipse bgColor='var(--color-finance)'>
                        <Heart />
                    </Ellipse>
                    <Ellipse bgColor='var(--color-health)'>
                        <Diamond />
                    </Ellipse>
                </RewardsWrapper>
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
    box-shadow: var(--shadow-md);

    @media screen and ${BREAKPOINTS.smMin} {
        justify-content: space-evenly;
        gap: var(--padding-md);
    }
`;

const P = styled(Paragraph)`
    font-size: 10px;

    span {
        font-weight: var(--font-weight-bold);
        font-size: 12px;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: 16px;
        span {
            font-size: 20px;
        }
    }
`;

const TextWrapper = styled(Flex)`
    gap: var(--padding-xs);
    align-items: center;
`;

const StatsWrapper = styled.div`
    display: flex;
    gap: var(--padding-sm);
    justify-content: space-between;
`;

const Statistic = styled.div`
    flex-basis: 25%;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-gray-100);
    background-color: ${p => p.bg};
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-md);
    max-width: 150px;

    p {
        font-size: 10px;
    }

    span {
        font-size: 28px;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        p {
            font-size: 16px;
        }

        span {
            font-size: 42px;
        }
    }
`;

const RewardsWrapper = styled(Card)`
    justify-content: flex-start;
    padding-block: calc(var(--padding-sm) * 1.5);
    padding-inline: var(--padding-sm);
    gap: var(--padding-sm);
`;

const Ellipse = styled.div`
    padding: calc(var(--padding-xs) * 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: ${p => p.bgColor};
    border-radius: 100%;

    svg {
        width: 100%;
        height: 100%;
        fill: var(--color-gray-100);
    }

    @media screen and ${BREAKPOINTS.smMin} {
        padding: var(--padding-xs);
        width: 64px;
        height: 64px;
    }
`;
