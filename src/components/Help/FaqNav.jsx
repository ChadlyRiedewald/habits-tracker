import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';
import { BREAKPOINTS } from '../../constants/breakpoints';
import ListItem from '../ListItem';

const FaqNav = () => {
    return (
        <nav>
            <List>
                <ListItem>
                    <NavLink
                        to='account'
                        className='faq-link'
                        activeClassName='faq-link--active'
                    >
                        Account
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to='rewards'
                        className='faq-link'
                        activeClassName='faq-link--active'
                    >
                        Rewards
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to='habits'
                        className='faq-link'
                        activeClassName='faq-link--active'
                    >
                        Habits
                    </NavLink>
                </ListItem>
            </List>
        </nav>
    );
};

export default FaqNav;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--margin-md);

    & li {
        display: flex;
    }

    @media screen and ${BREAKPOINTS.lg} {
        text-align: center;
        flex-direction: row;
        gap: 0;

        & li {
            display: block;
        }
    }
`;
