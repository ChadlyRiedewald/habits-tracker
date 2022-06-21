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
