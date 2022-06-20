import styled from 'styled-components/macro';

import * as Button from '../Button';
import MobileOnly from '../MobileOnly';
import S from '../Subtitle';
import { BREAKPOINTS } from '../../constants/breakpoints';
import HabitTypes from '../HabitTypes';
import Modal from './Modal';

const FilterMobileModal = ({ isOpen, setModal, title }) => {
    const close = () => {
        setModal(false);
    };

    return (
        <Modal isOpen={isOpen} setModal={setModal} title={title}>
            <MobileOnly width='true'>
                <Subtitle>Type</Subtitle>
                <FilterItemsWrapper>
                    <HabitTypes />
                </FilterItemsWrapper>
                <ButtonWrapper>
                    <Button.Inverted border='true' small='true' onClick={close}>
                        Cancel
                    </Button.Inverted>
                    <Button.Base small='true' onClick={close}>
                        Apply
                    </Button.Base>
                </ButtonWrapper>
            </MobileOnly>
        </Modal>
    );
};

export default FilterMobileModal;

const FilterItemsWrapper = styled.div`
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding-block: var(--padding-sm);
    padding-inline: var(--padding-md);
    gap: calc(var(--padding-sm) * 1);

    @media screen and ${BREAKPOINTS.sm} {
        max-height: 210px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
`;

const Subtitle = styled(S)`
    padding-left: var(--padding-md);
    padding-block: var(--padding-sm);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-block: var(--padding-sm);
    gap: var(--padding-sm);
`;
