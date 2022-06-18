import { Fragment } from 'react';
import { NavLink } from '../NavLink';

const NavLinks = ({ mobile }) => {
    return (
        <Fragment>
            <li>
                <NavLink
                    to='my-account'
                    className={mobile ? 'button-group' : 'settings-link'}
                    activeClassName={
                        mobile
                            ? 'button-group--active'
                            : 'settings-link--active'
                    }
                >
                    Account
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='security'
                    className={mobile ? 'button-group' : 'settings-link'}
                    activeClassName={
                        mobile
                            ? 'button-group--active'
                            : 'settings-link--active'
                    }
                >
                    Security
                </NavLink>
            </li>
        </Fragment>
    );
};

export default NavLinks;
