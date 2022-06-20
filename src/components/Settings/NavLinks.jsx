import { Fragment } from 'react';
import { NavLink } from '../NavLink';
import ListItem from '../ListItem';

const NavLinks = ({ mobile }) => {
    return (
        <Fragment>
            <ListItem>
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
            </ListItem>
            <ListItem>
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
            </ListItem>
        </Fragment>
    );
};

export default NavLinks;
