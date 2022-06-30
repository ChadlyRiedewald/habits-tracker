import { Fragment } from 'react';
import styled from 'styled-components/macro';

import ContactForm from './ContactForm';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';
import { FormWrapper } from '../FormWrapper';
import { Card as C } from '../Card';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Contact = () => {
    return (
        <Fragment>
            <MobileOnly>
                <FormWrapper>
                    <ContactForm />
                </FormWrapper>
            </MobileOnly>
            <DesktopOnly>
                <Wrapper>
                    <Header>
                        <h2>Get in touch</h2>
                        <Paragraph small='true'>
                            Feel free to contact us for any other questions
                        </Paragraph>
                    </Header>
                    <Card>
                        <ContactForm />
                    </Card>
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default Contact;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--margin-lg);
`;

const Card = styled(C)`
    @media screen and ${BREAKPOINTS.lg} {
        width: clamp(200px, 100%, 650px);
        margin-inline: auto;
        box-shadow: none;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        width: clamp(550px, 100%, 800px);
        padding: calc(var(--padding-md) * 1.5);
    }
`;
