import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';
import { Outlet } from 'react-router-dom';

const Habits = () => {
    return (
        <OuterContainer>
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
    min-height: 100%;
    border-radius: var(--border-radius-sm);
    padding: var(--padding-sm);
`;

const TabsWrapper = styled.div`
    display: flex;
    align-self: flex-end;
`;
