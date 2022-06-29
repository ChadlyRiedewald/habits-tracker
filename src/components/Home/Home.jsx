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

const Home = () => {
    return (
        <Fragment>
            <MobileOnly>
                <OuterContainer>
                    <FlexColumn>
                        <Title>
                            Hi, <span>Chadly</span>
                        </Title>
                        <Paragraph fontSize='12px' small='true'>
                            Today is your opportunity to build the tomorrow you
                            desire
                        </Paragraph>
                    </FlexColumn>
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
                        <FlexColumn>
                            <Title>
                                Hi, <span>Chadly</span>
                            </Title>
                            <Paragraph small='true'>
                                Today is your opportunity to build the tomorrow
                                you desire
                            </Paragraph>
                        </FlexColumn>
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
                    <RightWrapper></RightWrapper>
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

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-md) * 1.5);
    padding: var(--padding-md);
    width: calc(100vw - var(--width-nav) - 350px);
`;

const RightWrapper = styled.div`
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

const Card = styled.div`
    background-color: var(--color-gray-100);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-md);
`;
