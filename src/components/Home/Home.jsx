import styled from 'styled-components/macro';
import Title from '../Title';
import MobileOnly from '../MobileOnly';
import { Outlet } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Paragraph } from '../Paragraph';
import Calendar from './Calendar';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import ListItem from '../ListItem';
import { NavLink } from '../NavLink';
import { Fragment } from 'react';
import DesktopOnly from '../DesktopOnly';
import Subtitle from '../Subtitle';
import ProgressCircle from './ProgressCircle';
import { ReactComponent as Award } from '../../assets/award.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Diamond } from '../../assets/diamond.svg';
import { Card } from '../Card';

const Header = () => {
    return (
        <FlexColumn>
            <Title>
                Hi, <span>Chadly</span>
            </Title>
            <Paragraph fontSize='12px' small='true'>
                Today is your opportunity to build the tomorrow you desire
            </Paragraph>
        </FlexColumn>
    );
};

const Home = () => {
    return (
        <Fragment>
            <MobileOnly>
                <OuterContainer>
                    <Header />
                    <InnerContainer>
                        <Wrapper>
                            <Calendar />
                            <ButtonGroupNavigation>
                                <ListItem>
                                    <NavLink
                                        to='habits'
                                        className='button-group button-group--dark'
                                        activeClassName='button-group--active'
                                    >
                                        Habits
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink
                                        to='scores'
                                        className='button-group button-group--dark'
                                        activeClassName='button-group--active'
                                    >
                                        Scores
                                    </NavLink>
                                </ListItem>
                            </ButtonGroupNavigation>
                            <Outlet />
                        </Wrapper>
                    </InnerContainer>
                </OuterContainer>
            </MobileOnly>
            <DesktopOnly>
                <OuterContainer>
                    <LeftWrapper>
                        <Header />
                        <FlexColumn>
                            <Subtitle>Calendar</Subtitle>
                            <Card>
                                <Calendar />
                            </Card>
                        </FlexColumn>
                        <FlexColumn>
                            <Outlet />
                        </FlexColumn>
                    </LeftWrapper>
                    <RightWrapper>
                        <FlexColumn>
                            <Subtitle>Today</Subtitle>
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
                                        <P>To Do</P>
                                    </TextWrapper>
                                </FlexColumn>
                            </Card>
                        </FlexColumn>

                        <FlexColumn>
                            <Subtitle>This Week</Subtitle>
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
                                        <P>To Do</P>
                                    </TextWrapper>
                                </FlexColumn>
                            </Card>
                        </FlexColumn>
                        <FlexColumn>
                            <Subtitle>All time</Subtitle>
                            <Grid>
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
                            </Grid>
                        </FlexColumn>

                        <FlexColumn>
                            <Subtitle>Rewards</Subtitle>
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
                    </RightWrapper>
                </OuterContainer>
            </DesktopOnly>
        </Fragment>
    );
};

export default Home;

const OuterContainer = styled.div`
    padding-top: var(--padding-md);
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-sm) * 1.5);

    @media screen and ${BREAKPOINTS.lgMin} {
        width: calc(100vw - var(--width-nav));
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        gap: 0;
    }
`;

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-md) * 1.5);
    padding: var(--padding-md);
    width: calc(100vw - var(--width-nav) - 350px);
`;

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    width: 350px;
    background-color: var(--color-orange-100);
    padding: var(--padding-md);
`;

const FlexColumn = styled.div`
    padding-inline: calc(var(--padding-sm) * 1.5);
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);

    @media screen and ${BREAKPOINTS.lgMin} {
        padding: 0;
    }
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    border-top-right-radius: var(--border-radius-lg);
    border-top-left-radius: var(--border-radius-lg);
    padding: calc(var(--padding-md) * 1.25);
    margin-bottom: var(--height-mobile-nav);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    @media screen and ${BREAKPOINTS.sm} {
        padding-inline: calc(var(--padding-sm) * 1.5);
        padding-block: calc(var(--padding-sm) * 1.75);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-sm) * 1.5);
    width: clamp(150px, 100%, 650px);
    margin-inline: auto;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    gap: var(--padding-sm);
    align-items: center;
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--padding-sm);
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

const RewardsWrapper = styled.div`
    background-color: var(--color-gray-100);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-sm);
    display: flex;
    justify-content: flex-start;
    padding-block: calc(var(--padding-sm) * 1.5);
    padding-inline: var(--padding-sm);
    gap: var(--padding-xs);
`;

const Ellipse = styled.div`
    padding: calc(var(--padding-xs) * 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background-color: ${p => p.bgColor};
    border-radius: 100%;

    svg {
        width: 100%;
        height: 100%;
        fill: var(--color-gray-100);
    }

    @media screen and ${BREAKPOINTS.smMin} {
        padding: var(--padding-xs);
        width: 48px;
        height: 48px;
    }
`;
