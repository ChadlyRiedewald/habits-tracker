import { useLocation } from 'react-router-dom';
import { ButtonGroup } from '../ButtonGroup';
import { NavLink } from '../NavLink';
import MobileLayout from '../MobileLayout';
import { Paragraph } from '../Paragraph';

const Help = () => {
    let location = useLocation();

    return (
        <MobileLayout>
            <ButtonGroup>
                <NavLink
                    to=''
                    className='button-group'
                    activeClassName='button-group--active'
                    exact={true}
                >
                    Contact
                </NavLink>
                <NavLink
                    to='faq'
                    className='button-group'
                    activeClassName='button-group--active'
                >
                    FAQ
                </NavLink>
            </ButtonGroup>
            <Paragraph orange>
                {location.pathname === '/help'
                    ? 'Please enter your question below and we will reply as soon as possible'
                    : 'Feel free to contact us for any other questions'}
            </Paragraph>
        </MobileLayout>
    );
};

export default Help;
