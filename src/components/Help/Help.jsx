import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import MobileLayout from '../MobileLayout';
import DesktopLayout from '../DesktopLayout';
import Title from '../Title';
import { ButtonGroupNavigation } from '../ButtonGroupNavigation';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import NavLinks from './NavLinks';

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
                                <Paragraph small='true'>
                                    Write your question below and we will reply
                                    as soon as possible
                                </Paragraph>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Title>FAQ</Title>
                                <Paragraph small='true'>
                                    Feel free to contact us for any other
                                    questions
                                </Paragraph>
                            </Fragment>
                        )}
                    </FlexColumn>
                    <ButtonGroupNavigation>
                        <NavLinks mobile='true' />
                    </ButtonGroupNavigation>
                </Header>
            </MobileLayout>
            <DesktopLayout title='Help'>
                <NavLinks />
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
