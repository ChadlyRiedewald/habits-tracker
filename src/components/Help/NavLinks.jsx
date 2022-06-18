import { Fragment } from 'react';
import { NavLink } from '../NavLink';

const NavLinks = ({ mobile }) => {
    return (
        <Fragment>
            <li>
                <NavLink
                    to='faq'
                    className={mobile ? 'button-group' : 'settings-link'}
                    activeClassName={
                        mobile
                            ? 'button-group--active'
                            : 'settings-link--active'
                    }
                >
                    FAQ
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='contact'
                    className={mobile ? 'button-group' : 'settings-link'}
                    activeClassName={
                        mobile
                            ? 'button-group--active'
                            : 'settings-link--active'
                    }
                >
                    Contact
                </NavLink>
            </li>
        </Fragment>
    );
};

export default NavLinks;
