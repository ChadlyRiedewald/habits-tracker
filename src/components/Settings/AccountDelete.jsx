import styled from 'styled-components/macro';

import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Card } from '../Card';
import { Header } from '../Header';

const AccountDelete = ({ mobile }) => {
    return mobile ? (
        <Flex>
            <MobileHeader>
                <Subtitle>Delete account</Subtitle>
                <Paragraph small='true'>
                    If you delete your account, all your data will be gone
                    forever
                </Paragraph>
            </MobileHeader>
            <Button.Error small='true' align='center'>
                Delete
            </Button.Error>
        </Flex>
    ) : (
        <Card>
            <Flex>
                <Header>
                    <Subtitle>Delete account</Subtitle>
                    <Paragraph small='true'>
                        If you delete your account, all your data will be gone
                        forever
                    </Paragraph>
                </Header>
                <Button.Error small='true' align='center'>
                    Delete
                </Button.Error>
            </Flex>
        </Card>
    );
};

export default AccountDelete;

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--padding-lg);
`;

const MobileHeader = styled(Header)`
    margin: 0;
`;
