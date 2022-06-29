import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';
import { Outlet } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants/breakpoints';
import S from '../Subtitle';

const Habits = () => {
    return (
        <OuterContainer>
            <Flex>
                <Subtitle>Habits</Subtitle>
                <TabsWrapper>
                    <NavLink
                        to='todo'
                        className='habits-link'
                        activeClassName='habits-link--active'
                    >
                        To Do
                    </NavLink>
                    <NavLink
                        to='completed'
                        className='habits-link'
                        activeClassName='habits-link--active'
                    >
                        Completed
                    </NavLink>
                </TabsWrapper>
            </Flex>

            <InnerContainer>
                <Outlet />
            </InnerContainer>
        </OuterContainer>
    );
};

export default Habits;

const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-200);
    height: 100%;
    border-radius: var(--border-radius-sm);
    padding: var(--padding-sm);

    @media screen and ${BREAKPOINTS.lgMin} {
        background-color: var(--color-gray-100);
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-md);
    }
`;

const TabsWrapper = styled.div`
    display: flex;
    align-self: flex-end;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Subtitle = styled(S)`
    @media screen and ${BREAKPOINTS.lg} {
        visibility: hidden;
    }
`;
