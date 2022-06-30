import styled from 'styled-components/macro';

import * as Button from '../Button';
import Subtitle from '../Subtitle';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Paragraph } from '../Paragraph';
import { ReactComponent as A } from '../../assets/avatars/4.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { useState } from 'react';
import ChangeAvatarModal from '../Modals/ChangeAvatarModal';
import { Card } from '../Card';

const AccountDetails = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    return (
        <Card>
            <ChangeAvatarModal isOpen={isModalOpen} setModal={setModalIsOpen}>
                <Paragraph center='true'></Paragraph>
            </ChangeAvatarModal>
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
                        <Avatar onClick={openModal} />
                        <Button.InvertedXS align='center' onClick={openModal}>
                            Change
                            <Edit />
                        </Button.InvertedXS>
                    </RightWrapper>
                </Flex>
            </Wrapper>
        </Card>
    );
};

export default AccountDetails;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
    min-width: 100%;
    width: clamp(200px, 100%, 650px);
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding-md);
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;
    gap: var(--padding-sm);

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

const P = styled(Paragraph)`
    font-size: 12px;

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: var(--font-xxs);
    }
`;

const Em = styled(P)`
    font-weight: var(--font-weight-bold);
`;

const Avatar = styled(A)`
    cursor: pointer;
`;
