import { Outlet, useLocation } from 'react-router-dom';

import * as S from '../Auth';
import MobileOnly from '../MobileOnly';
import { ButtonGroup } from '../ButtonGroup';
import { NavLink } from '../NavLink';

const Help = () => {
    let location = useLocation();

    return (
        <S.OuterContainer>
            <MobileOnly>
                <S.Header>
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
                    <S.Paragraph orange>
                        {location.pathname === '/help'
                            ? 'Please enter your question below and we will reply as soon as possible'
                            : 'Feel free to contact us for any other questions'}
                    </S.Paragraph>
                </S.Header>
            </MobileOnly>
            <S.InnerContainer>
                <Outlet />
            </S.InnerContainer>
        </S.OuterContainer>
    );
};

export default Help;
