import { Fragment } from 'react';
import { NavLink } from '../NavLink';
import ListItem from '../ListItem';

const NavLinks = ({ mobile }) => {
    return (
        <Fragment>
            <ListItem>
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
            </ListItem>
            <ListItem>
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
            </ListItem>
        </Fragment>
    );
};

export default NavLinks;
