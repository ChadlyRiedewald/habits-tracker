import { Fragment, useState } from 'react';
import styled from 'styled-components/macro';

import Input from '../Input';
import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { FormWrapper } from '../FormWrapper';
import { Card } from '../Card';
import { ButtonWrapper as B } from '../ButtonWrapper';
import ConfirmActionModal from '../Modals/ConfirmActionModal';
import { Paragraph } from '../Paragraph';

const Form = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return (
        <Fragment>
            <ConfirmActionModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'>
                    Are you sure you want to edit your account details?
                </Paragraph>
            </ConfirmActionModal>
            <form>
                <Subtitle>Edit account details</Subtitle>
                <Input label='Name' name='name' />
                <Input label='Email' name='email' type='email' />
                <ButtonWrapper>
                    <Button.Inverted small='true' border='true' type='button'>
                        Cancel
                    </Button.Inverted>
                    <Button.Base small='true' type='button' onClick={openModal}>
                        Save
                    </Button.Base>
                </ButtonWrapper>
            </form>
        </Fragment>
    );
};

const EditAccountDetails = ({ mobile }) => {
    return mobile ? (
        <FormWrapper>
            <Form />
        </FormWrapper>
    ) : (
        <Card>
            <Form />
        </Card>
    );
};

export default EditAccountDetails;

const ButtonWrapper = styled(B)`
    align-self: flex-end;
`;
