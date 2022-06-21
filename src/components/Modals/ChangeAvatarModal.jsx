import * as Button from '../Button';
import Modal from './Modal';
import styled from 'styled-components/macro';
import { ReactComponent as Avatar } from '../../assets/avatars/4.svg';
import { ReactComponent as Download } from '../../assets/download.svg';
import { ReactComponent as Change } from '../../assets/edit.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { BREAKPOINTS } from '../../constants/breakpoints';

const ChangeAvatarModal = ({ isOpen, setModal, children }) => {
    const handleAction = () => {
        setModal(false);
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal} title='Change avatar'>
            <FlexColumn>
                {children}
                <Flex>
                    <Avatar />
                    <ButtonWrapperColumn>
                        <Button.InvertedXS>
                            Change
                            <Change />
                        </Button.InvertedXS>
                        <Button.InvertedXS>
                            Download
                            <Download />
                        </Button.InvertedXS>
                        <Button.InvertedXS>
                            Delete
                            <Delete />
                        </Button.InvertedXS>
                    </ButtonWrapperColumn>
                </Flex>
                <ButtonWrapper>
                    <Button.Inverted
                        small='true'
                        border='true'
                        onClick={() => setModal(false)}
                        align='center'
                    >
                        Cancel
                    </Button.Inverted>
                    <Button.Base
                        small='true'
                        border='true'
                        onClick={handleAction}
                        align='center'
                    >
                        Confirm
                    </Button.Base>
                </ButtonWrapper>
            </FlexColumn>
        </Modal>
    );
};

export default ChangeAvatarModal;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--padding-md);
    gap: var(--padding-md);
`;

const Flex = styled.div`
    display: flex;
    gap: var(--padding-sm);
    justify-content: space-around;
    align-items: center;

    svg {
        width: 96px;
        height: 96px;

        @media screen and ${BREAKPOINTS.lgMin} {
            width: 128px;
            height: 128px;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: var(--padding-sm);
    justify-content: center;
`;

const ButtonWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
