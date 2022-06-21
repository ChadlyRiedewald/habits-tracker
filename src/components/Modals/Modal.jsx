import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';

import Title from '../Title';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { VARIANTS } from '../../constants/variants';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, isOpen, setModal, title }) => {
    const { overlay, modal } = VARIANTS;

    const close = () => {
        setModal(false);
    };

    return ReactDOM.createPortal(
        <Fragment>
            <AnimatePresence>
                {isOpen && (
                    <Overlay
                        onClick={close}
                        key='overlay'
                        as={motion.div}
                        variants={overlay}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <Wrapper
                            onClick={e => e.stopPropagation()}
                            key='modal'
                            as={motion.div}
                            variants={modal}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <Topbar>
                                <Flex>
                                    <Title>{title}</Title>
                                </Flex>
                            </Topbar>
                            {children}
                        </Wrapper>
                    </Overlay>
                )}
            </AnimatePresence>
        </Fragment>,
        document.getElementById('portal')
    );
};

export default Modal;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-gray-100);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-high);
    z-index: 1000;
    width: clamp(200px, 90vw, 450px);
    height: clamp(200px, 80vh, fit-content);

    @media screen and ${BREAKPOINTS.sm} {
        max-width: clamp(200px, 90vw, 320px);
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
    backdrop-filter: blur(2px);
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Topbar = styled.div`
    width: 100%;
    background-color: var(--color-gray-200);
    border-top-left-radius: var(--border-radius-sm);
    border-top-right-radius: var(--border-radius-sm);
    padding: calc(var(--padding-sm) * 1.5);
    position: relative;
`;
