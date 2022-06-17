import styled from 'styled-components/macro';
import { Fragment } from 'react';
import * as B from '../Button';
import { ReactComponent as Close } from '../../assets/close-modal.svg';
import { BREAKPOINTS } from '../../constants';

const Modal = ({ children, open, onClose, handleAction }) => {
    const handleActions = () => {
        handleAction();
        onClose();
    };

    return open ? (
        <Fragment>
            <Overlay onClick={onClose} />
            <Wrapper>
                <X onClick={onClose}>
                    <Close stroke='var(--color-gray-800)' />
                </X>
                {children}
                <Flex>
                    <B.Inverted small onClick={onClose}>
                        Cancel
                    </B.Inverted>
                    <B.Base small onClick={handleActions}>
                        Ok
                    </B.Base>
                </Flex>
            </Wrapper>
        </Fragment>
    ) : null;
};

export default Modal;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-gray-100);
    padding: var(--padding-md);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-high);
    z-index: 1000;
    width: clamp(200px, 90vw, 500px);

    @media screen and ${BREAKPOINTS.lg} {
        height: clamp(200px, fit-content, 80vh);
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

const X = styled.span`
    cursor: pointer;
    align-self: flex-end;

    & svg {
        width: 32px;
        height: 32px;
        @media screen and ${BREAKPOINTS.smMin} {
            width: 42px;
            height: 42px;
        }
    }
`;

const Flex = styled.div`
    display: flex;
    gap: var(--padding-sm);
    align-items: flex-end;
`;
