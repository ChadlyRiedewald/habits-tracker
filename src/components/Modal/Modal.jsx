import styled from 'styled-components/macro';
import { Fragment } from 'react';
import * as B from '../Button';
import { ReactComponent as Close } from '../../assets/close-modal.svg';

const Modal = ({ children, open, onClose, okFunction }) => {
    const handleSuccess = () => {
        okFunction();
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
                    <B.Base small onClick={handleSuccess}>
                        Ok
                    </B.Base>
                </Flex>
            </Wrapper>
        </Fragment>
    ) : null;
};

export default Modal;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-gray-100);
    width: 500px;
    height: 300px;
    padding-block: var(--padding-md);
    padding-inline: calc(var(--padding-md) * 1.5);
    z-index: 1000;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-elevation-high);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
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
    }
`;

const Flex = styled.div`
    display: flex;
    gap: var(--padding-sm);
`;
