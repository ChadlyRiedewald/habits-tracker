import styled from 'styled-components/macro';

import Input from '../Input';
import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { FormWrapper } from '../FormWrapper';
import { Card } from '../Card';

const Form = () => {
    return (
        <form>
            <Subtitle>Edit account details</Subtitle>
            <Input label='Name' name='name' />
            <Input label='Email' name='email' type='email' />
            <Flex>
                <Button.Inverted small='true' border='true'>
                    Cancel
                </Button.Inverted>
                <Button.Base small='true'>Save</Button.Base>
            </Flex>
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

const Flex = styled.div`
    display: flex;
    gap: var(--margin-sm);
    align-self: flex-end;
`;
