import Input from '../Input';
import * as B from '../Button';
import styled from 'styled-components/macro';
import Subtitle from '../Subtitle';

const MyAccountForm = () => {
    return (
        <form>
            <Subtitle>Personal information</Subtitle>
            <Input label='Name' name='name' />
            <Input label='Email' name='email' type='email' />
            <Flex>
                <B.Inverted small border>
                    Cancel
                </B.Inverted>
                <B.Base small>Save</B.Base>
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
