import MobileLayout from '../MobileLayout';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';

const Discover = () => {
    return (
        <MobileLayout>
            <ButtonGroupNavigation>
                <li>
                    <NavLink
                        to='discover'
                        className='button-group'
                        activeClassName='button-group--active'
                        exact={true}
                    >
                        Discover
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='all'
                        className='button-group'
                        activeClassName='button-group--active'
                    >
                        All
                    </NavLink>
                </li>
            </ButtonGroupNavigation>
        </MobileLayout>
    );
};

export default Discover;
