import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import FaqNav from './FaqNav';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';

const Faq = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Wrapper>
                    <FaqNav />
                    <Outlet />
                </Wrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Header>
                        <h2>Have a question?</h2>
                        <Paragraph small='true'>
                            Feel free to contact us for any other questions
                        </Paragraph>
                    </Header>
                    <Flex>
                        <FaqNav />
                        <OutletWrapper>
                            <Outlet />
                        </OutletWrapper>
                    </Flex>
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default Faq;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--margin-lg);
`;

const Flex = styled.div`
    display: flex;
    gap: var(--padding-xl);
`;

const OutletWrapper = styled.div`
    max-width: 550px;
    flex: 1;
    margin-top: var(--padding-sm);
`;

export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-sm) * 1.5);

    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(200px, 100%, 650px);
        margin-inline: auto;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        gap: var(--padding-md);
    }
`;
