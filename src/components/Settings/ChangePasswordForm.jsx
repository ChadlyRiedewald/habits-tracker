import styled from 'styled-components/macro';

import * as Button from '../Button';
import Subtitle from '../Subtitle';
import Input from '../Input';
import { ButtonWrapper as B } from '../ButtonWrapper';

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
            <ButtonWrapper>
                <Button.Inverted small='true' border='true'>
                    Cancel
                </Button.Inverted>
                <Button.Base small='true'>Save</Button.Base>
            </ButtonWrapper>
        </form>
    );
};

export default ChangePasswordForm;

const ButtonWrapper = styled(B)`
    align-self: flex-end;
`;
