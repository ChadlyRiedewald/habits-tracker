import { Paragraph } from '../Paragraph';
import { Base, Inverted } from '../Button';
import Modal from './Modal';
import styled from 'styled-components/macro';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/Auth.context';

const SignOutModal = ({ isOpen, setModal }) => {
    const { toggle } = useContext(AuthContext);

    const signOut = () => {
        toggle();
        setModal(false);
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal}>
            <FlexColumn>
                <Paragraph center>Are you sure you want to sign out?</Paragraph>
                <Flex>
                    <Inverted
                        small={true}
                        border={true}
                        onClick={() => setModal(false)}
                    >
                        Cancel
                    </Inverted>
                    <Base small={true} onClick={signOut}>
                        Confirm
                    </Base>
                </Flex>
            </FlexColumn>
        </Modal>
    );
};

export default SignOutModal;

/////////////// MODAL

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
