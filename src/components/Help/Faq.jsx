import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants/breakpoints';
import DesktopOnly from '../DesktopOnly';
import FaqNav from './FaqNav';
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
                        <Paragraph small={true}>
                            Feel free to contact us for any other questions
                        </Paragraph>
                    </Header>
                    <Flex>
                        <FaqNav />
                        <WrapOutlet>
                            <Outlet />
                        </WrapOutlet>
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

const WrapOutlet = styled.div`
    max-width: 550px;
    flex: 1;
    margin-top: var(--padding-sm);
`;

export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-sm) * 1.5);

    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(248px, 85vw, 800px);
        margin-inline: auto;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        gap: var(--padding-md);
    }
`;
