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

const Home = () => {
    return (
        <MobileOnly>
            <OuterContainer>
                <Header>
                    <Title>
                        Hi, <span>Chadly</span>
                    </Title>
                    <Paragraph fontSize='12px'>
                        Today is your opportunity to build the tomorrow you
                        desire
                    </Paragraph>
                </Header>
                <InnerContainer>
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
                </InnerContainer>
            </OuterContainer>
        </MobileOnly>
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
`;

const Header = styled.div`
    padding-inline: calc(var(--padding-sm) * 1.5);
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-100);
    border-top-right-radius: var(--border-radius-lg);
    border-top-left-radius: var(--border-radius-lg);
    padding: calc(var(--padding-md) * 1.25);
    margin-bottom: var(--height-mobile-nav);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-sm) * 1.5);

    @media screen and ${BREAKPOINTS.sm} {
        padding-inline: calc(var(--padding-sm) * 1.5);
        padding-block: calc(var(--padding-sm) * 1.75);
    }
`;
