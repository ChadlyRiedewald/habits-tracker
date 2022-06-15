import MobileLayout from '../MobileLayout';
import { ButtonGroup } from '../ButtonGroup';
import { NavLink } from '../NavLink';

const Discover = () => {
    return (
        <MobileLayout>
            <ButtonGroup>
                <NavLink
                    to=''
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
            </ButtonGroup>
        </MobileLayout>
    );
};

export default Discover;
