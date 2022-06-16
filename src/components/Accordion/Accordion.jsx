import styled from 'styled-components/macro';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { useState } from 'react';
import { BREAKPOINTS } from '../../constants';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Wrapper onClick={() => setIsActive(!isActive)}>
            <FlexColumn>
                <TitleContainer>
                    <Title>{title}</Title>
                    {isActive ? <Minus /> : <Plus />}
                </TitleContainer>
                {isActive && <Paragraph>{content}</Paragraph>}
            </FlexColumn>
        </Wrapper>
    );
};

export default Accordion;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    border-bottom: solid 1px var(--color-orange-400);
    padding-bottom: var(--padding-sm);
    cursor: pointer;
    @media screen and ${BREAKPOINTS.smMin} {
        padding-bottom: calc(var(--padding-sm) * 1.5);
    }
`;

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    svg {
        stroke: var(--color-orange-400);
        width: 16px;
        height: 16px;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

const Title = styled.h4`
    font-size: var(--font-xs);
    @media screen and ${BREAKPOINTS.smMin} {
        font-size: var(--font-md);
    }
`;

const Paragraph = styled.p`
    font-size: var(--font-xxs);
    @media screen and ${BREAKPOINTS.smMin} {
        font-size: var(--font-xs);
    }
`;

const FlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);

    @media screen and ${BREAKPOINTS.smMin} {
        gap: calc(var(--padding-sm) * 1.5);
    }
`;
