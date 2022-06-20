import styled from 'styled-components/macro';

import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Card } from '../Card';
import { Paragraph } from '../Paragraph';
import { ReactComponent as Avatar } from '../../assets/avatars/4.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { FormWrapper } from '../FormWrapper';

const AccountDetails = () => {
    return (
        <Card>
            <FormWrapper>
                <Wrapper>
                    <Subtitle>Account details</Subtitle>
                    <Flex>
                        <LeftWrapper>
                            <Ul>
                                <Li>
                                    <Em>Username:</Em>
                                    <P>chadly</P>
                                </Li>
                                <Li>
                                    <Em>Email:</Em>
                                    <P>chadly@live</P>
                                </Li>
                                <Li>
                                    <Em>Role:</Em>
                                    <P>Admin</P>
                                </Li>
                                <Li>
                                    <Em>Active since:</Em>
                                    <P>01-05-2022</P>
                                </Li>
                            </Ul>
                        </LeftWrapper>
                        <RightWrapper>
                            <Avatar />
                            <ButtonWrapper>
                                <Button.InvertedXS border='true'>
                                    Change
                                    <Edit />
                                </Button.InvertedXS>
                            </ButtonWrapper>
                        </RightWrapper>
                    </Flex>
                </Wrapper>
            </FormWrapper>
        </Card>
    );
};

export default AccountDetails;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
`;

const Flex = styled.div`
    display: flex;
    align-items: center;

    //flex-direction: column;
    //justify-content: flex-start;
    //align-items: flex-start;
    gap: var(--padding-md);

    @media screen and ${BREAKPOINTS.smMin} {
        flex-direction: row;
        justify-content: space-between;
        min-width: 100%;
        align-items: center;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    align-items: center;
    gap: var(--padding-sm);

    @media screen and ${BREAKPOINTS.lgMin} {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
    }

    svg {
        width: 64px;
        height: 64px;

        @media screen and ${BREAKPOINTS.smMin} {
            width: 82px;
            height: 82px;
        }

        @media screen and ${BREAKPOINTS.lgMin} {
            width: 96px;
            height: 96px;
        }
    }
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-basis: 70%;
    @media screen and ${BREAKPOINTS.smMin} {
        flex-basis: 50%;
        justify-content: center;
    }
`;

const Ul = styled.ul``;

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    width: clamp(150px, 100%, 180px);

    @media screen and ${BREAKPOINTS.smMin} {
        width: clamp(150px, 100%, 250px);
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
    @media screen and ${BREAKPOINTS.smMin} {
        flex-direction: row;
    }
`;

const P = styled(Paragraph)`
    font-size: 12px;

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: var(--font-xxs);
    }
`;

const Em = styled(P)`
    font-weight: var(--font-weight-bold);
`;
