import styled from 'styled-components/macro';

import * as Button from '../Button';
import Subtitle from '../Subtitle';
import Input from '../Input';
import { ButtonWrapper as B } from '../ButtonWrapper';
import { useState } from 'react';
import { Fragment } from 'react';
import ConfirmActionModal from '../Modals/ConfirmActionModal';
import { Paragraph } from '../Paragraph';

const ChangePasswordForm = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Are you sure you want to change your password?
                </Paragraph>
            </ConfirmActionModal>
            <form>
                <Subtitle>Change password</Subtitle>
                <Input
                    label='Current password'
                    name='current-password'
                    type='password'
                />
                <Input
                    label='New password'
                    name='new-password'
                    type='password'
                />
                <Input
                    label='Confirm password'
                    name='confirm-password'
                    type='password'
                />
                <ButtonWrapper>
                    <Button.Inverted small='true' border='true' type='button'>
                        Cancel
                    </Button.Inverted>
                    <Button.Base small='true' onClick={openModal} type='button'>
                        Save
                    </Button.Base>
                </ButtonWrapper>
            </form>
        </Fragment>
    );
};

export default ChangePasswordForm;

const ButtonWrapper = styled(B)`
    align-self: flex-end;
`;
