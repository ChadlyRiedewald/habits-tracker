import styled from 'styled-components/macro';

import Input from '../Input';
import * as Button from '../Button';
import Subtitle from '../Subtitle';

const MyAccountForm = () => {
    return (
        <form>
            <Subtitle>Personal information</Subtitle>
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

export default MyAccountForm;

const Flex = styled.div`
    display: flex;
    gap: var(--margin-sm);
    align-self: flex-end;
`;
