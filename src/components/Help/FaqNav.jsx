import { NavLink } from '../NavLink';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const FaqNav = () => {
    return (
        <nav>
            <List>
                <li>
                    <NavLink
                        to='account'
                        className='faq-link'
                        activeClassName='faq-link--active'
                    >
                        Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='rewards'
                        className='faq-link'
                        activeClassName='faq-link--active'
                    >
                        Rewards
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='habits'
                        className='faq-link'
                        activeClassName='faq-link--active'
                    >
                        Habits
                    </NavLink>
                </li>
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
