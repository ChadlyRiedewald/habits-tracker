import styled from 'styled-components/macro';

import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { Paragraph } from '../Paragraph';
import { Header } from '../Header';
import { Card } from '../Card';

const AccountReset = ({ mobile }) => {
    return mobile ? (
        <Flex>
            <MobileHeader>
                <Subtitle>Reset account</Subtitle>
                <Paragraph small='true'>
                    If you reset your account, you will lose all of your
                    progress and data
                </Paragraph>
            </MobileHeader>
            <Button.Alert small='true' align='center'>
                Reset
            </Button.Alert>
        </Flex>
    ) : (
        <Card>
            <Flex>
                <Header>
                    <Subtitle>Reset account</Subtitle>
                    <Paragraph small='true'>
                        If you reset your account, you will lose all of your
                        progress and data
                    </Paragraph>
                </Header>
                <Button.Alert small='true' align='center'>
                    Reset
                </Button.Alert>
            </Flex>
        </Card>
    );
};

export default AccountReset;

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
