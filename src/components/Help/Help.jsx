import { useLocation } from 'react-router-dom';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';
import MobileLayout from '../MobileLayout';
import { Paragraph } from '../Paragraph';
import DesktopLayout from '../DesktopLayout';
import { Fragment } from 'react';

const Help = () => {
    let location = useLocation();

    return (
        <Fragment>
            <MobileLayout>
                <ButtonGroupNavigation>
                    <li>
                        <NavLink
                            to='contact'
                            className='button-group'
                            activeClassName='button-group--active'
                            exact={true}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='faq'
                            className='button-group'
                            activeClassName='button-group--active'
                        >
                            FAQ
                        </NavLink>
                    </li>
                </ButtonGroupNavigation>
                <Paragraph orange>
                    {location.pathname === '/help/contact'
                        ? 'Please enter your question below and we will reply as soon as possible'
                        : 'Feel free to contact us for any other questions'}
                </Paragraph>
            </MobileLayout>
            <DesktopLayout title='Help'>
                <li>
                    <NavLink
                        to='contact'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='faq'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        FAQ
                    </NavLink>
                </li>
            </DesktopLayout>
        </Fragment>
    );
};

export default Help;
