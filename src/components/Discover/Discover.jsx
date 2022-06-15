import MobileLayout from '../MobileLayout';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';

const Discover = () => {
    return (
        <MobileLayout>
            <ButtonGroupNavigation>
                <NavLink
                    to='discover'
                    className='button-group'
                    activeClassName='button-group--active'
                    exact={true}
                >
                    Discover
                </NavLink>
                <NavLink
                    to='all'
                    className='button-group'
                    activeClassName='button-group--active'
                >
                    All
                </NavLink>
            </ButtonGroupNavigation>
        </MobileLayout>
    );
};

export default Discover;
