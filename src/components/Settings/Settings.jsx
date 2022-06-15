import MobileLayout from '../MobileLayout';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';
import { Fragment } from 'react';
import DesktopLayout from '../DesktopLayout';

const Settings = () => {
    return (
        <Fragment>
            <MobileLayout>
                <ButtonGroupNavigation>
                    <li>
                        <NavLink
                            to='my-account'
                            className='button-group'
                            activeClassName='button-group--active'
                            exact={true}
                        >
                            My account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='security'
                            className='button-group'
                            activeClassName='button-group--active'
                        >
                            Security
                        </NavLink>
                    </li>
                </ButtonGroupNavigation>
            </MobileLayout>
            <DesktopLayout title='Settings'>
                <li>
                    <NavLink
                        to='my-account'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='security'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        Security
                    </NavLink>
                </li>
            </DesktopLayout>
        </Fragment>
    );
};

export default Settings;
