import styled from 'styled-components/macro';
import * as Button from '../Button';
import HabitTypes from '../HabitTypes';
import { BREAKPOINTS } from '../../constants/breakpoints';
import Subtitle from '../Subtitle';
import Modal from './Modal';

const NewHabitModal = ({ isOpen, setModal, title }) => {
    const close = () => {
        setModal(false);
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal} title={title}>
            <Wrapper>
                <FlexColumn>
                    <Subtitle>Name</Subtitle>
                    <input />
                </FlexColumn>
                <HabitTypesWrapper>
                    <Subtitle>Type</Subtitle>
                    <HabitTypes />
                </HabitTypesWrapper>
                <ButtonWrapper>
                    <Button.Inverted small='true' border='true' onClick={close}>
                        Cancel
                    </Button.Inverted>
                    <Button.Base small='true' onClick={close}>
                        Create
                    </Button.Base>
                </ButtonWrapper>
            </Wrapper>
        </Modal>
    );
};

export default NewHabitModal;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    padding: var(--padding-md);
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
`;

const HabitTypesWrapper = styled.div`
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);

    @media screen and ${BREAKPOINTS.sm} {
        max-height: 210px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: var(--padding-sm);
`;
