import { useLocation } from 'react-router-dom';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { NavLink } from '../NavLink';
import MobileLayout from '../MobileLayout';
import { Paragraph } from '../Paragraph';
import DesktopLayout from '../DesktopLayout';
import { Fragment } from 'react';
import { Header } from '../Header';
import styled from 'styled-components/macro';
import Title from '../Title';

const Help = () => {
    let location = useLocation();

    return (
        <Fragment>
            <MobileLayout>
                <Header>
                    <FlexColumn>
                        {location.pathname === '/help/contact' ? (
                            <Fragment>
                                <Title>Contact</Title>
                                <Paragraph small={true}>
                                    Write your question below and we will reply
                                    as soon as possible
                                </Paragraph>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Title>FAQ</Title>
                                <Paragraph small={true}>
                                    Feel free to contact us for any other
                                    questions
                                </Paragraph>
                            </Fragment>
                        )}
                    </FlexColumn>
                    <ButtonGroupNavigation>
                        <li>
                            <NavLink
                                to='faq'
                                className='button-group'
                                activeClassName='button-group--active'
                            >
                                FAQ
                            </NavLink>
                        </li>
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
                    </ButtonGroupNavigation>
                </Header>
            </MobileLayout>
            <DesktopLayout title='Help'>
                <li>
                    <NavLink
                        to='faq'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='contact'
                        className='settings-link'
                        activeClassName='settings-link--active'
                    >
                        Contact
                    </NavLink>
                </li>
            </DesktopLayout>
        </Fragment>
    );
};

export default Help;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-xs) * 0.5);
`;
