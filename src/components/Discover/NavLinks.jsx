import { Fragment } from 'react';
import { NavLink } from '../NavLink';
import ListItem from '../ListItem';

const NavLinks = ({ mobile }) => {
    return (
        <Fragment>
            <ListItem>
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
            </ListItem>
            <ListItem>
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
            </ListItem>
        </Fragment>
    );
};

export default NavLinks;
