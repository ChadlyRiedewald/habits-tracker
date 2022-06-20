import styled from 'styled-components/macro';

import Input from '../Input';
import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { FormWrapper } from '../FormWrapper';
import { Card } from '../Card';
import { ButtonWrapper as B } from '../ButtonWrapper';

const Form = () => {
    return (
        <form>
            <Subtitle>Edit account details</Subtitle>
            <Input label='Name' name='name' />
            <Input label='Email' name='email' type='email' />
            <ButtonWrapper>
                <Button.Inverted small='true' border='true' type='button'>
                    Cancel
                </Button.Inverted>
                <Button.Base small='true' type='button'>
                    Save
                </Button.Base>
            </ButtonWrapper>
        </form>
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
