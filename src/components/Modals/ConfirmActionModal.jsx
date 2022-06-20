import Modal from './Modal';
import * as Button from '../Button';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

const ConfirmActionModal = ({
    isOpen,
    setModal,
    action,
    children,
    navigateTo,
}) => {
    const navigate = useNavigate();

    const handleAction = () => {
        setModal(false);
        action();
        navigate({ navigateTo });
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal}>
            <FlexColumn>
                {children}
                <Flex>
                    <Button.Inverted
                        small='true'
                        border='true'
                        onClick={() => setModal(false)}
                    >
                        Cancel
                    </Button.Inverted>
                    <Button.Base small='true' onClick={handleAction}>
                        Confirm
                    </Button.Base>
                </Flex>
            </FlexColumn>
        </Modal>
    );
};

export default ConfirmActionModal;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--padding-md);
    gap: var(--padding-md);
`;

const Flex = styled.div`
    display: flex;
    gap: var(--padding-sm);
    justify-content: center;
`;
