import Subtitle from '../Subtitle';
import Input from '../Input';
import * as Button from '../Button';
import styled from 'styled-components/macro';

const ChangePasswordForm = () => {
    return (
        <form>
            <Subtitle>Change password</Subtitle>
            <Input
                label='Current password'
                name='current-password'
                type='password'
            />
            <Input label='New password' name='new-password' type='password' />
            <Input
                label='Confirm password'
                name='confirm-password'
                type='password'
            />
            <Flex>
                <Button.Inverted small={true} border={true}>
                    Cancel
                </Button.Inverted>
                <Button.Base small={true}>Save</Button.Base>
            </Flex>
        </form>
    );
};

export default ChangePasswordForm;

const Flex = styled.div`
    display: flex;
    gap: var(--margin-sm);
    align-self: flex-end;
`;
