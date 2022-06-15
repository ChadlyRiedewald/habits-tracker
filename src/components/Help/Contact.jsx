import styled from 'styled-components/macro';
import { FormWrapper } from '../FormWrapper';
import ContactForm from './ContactForm';
import MobileOnly from '../MobileOnly';
import { Fragment } from 'react';
import DesktopOnly from '../DesktopOnly';
import { Header } from '../Header';
import { Paragraph } from '../Paragraph';

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
                        <Paragraph small>
                            Feel free to contact us for any other questions
                        </Paragraph>
                    </Header>
                    <FormCard>
                        <ContactForm />
                    </FormCard>
                </Wrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default Contact;

const Wrapper = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--margin-lg);
`;

const FormCard = styled.div`
    display: flex;
    width: clamp(550px, 100%, 664px);
    background-color: var(--color-gray-100);
    padding: var(--padding-lg);
    border-radius: var(--border-radius-sm);
`;
