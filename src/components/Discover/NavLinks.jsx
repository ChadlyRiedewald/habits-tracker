import { Fragment } from 'react';
import { NavLink } from '../NavLink';

const NavLinks = ({ mobile }) => {
    return (
        <Fragment>
            <li>
                <NavLink
                    to='discover'
                    className={mobile ? 'button-group' : 'discover-link'}
                    activeClassName={
                        mobile
                            ? 'button-group--active'
                            : 'discover-link--active'
                    }
                >
                    Discover
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='all'
                    className={mobile ? 'button-group' : 'discover-link'}
                    activeClassName={
                        mobile
                            ? 'button-group--active'
                            : 'discover-link--active'
                    }
                >
                    All
                </NavLink>
            </li>
        </Fragment>
    );
};

export default NavLinks;
