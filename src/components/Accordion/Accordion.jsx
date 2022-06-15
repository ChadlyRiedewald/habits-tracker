import styled from 'styled-components/macro';
import { ReactComponent as Expand } from '../../assets/expand.svg';
import { ReactComponent as Collapse } from '../../assets/collapse.svg';
import { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <AccordionContainer onClick={() => setIsActive(!isActive)}>
            <FlexColumn>
                <TitleContainer>
                    <h2>{title}</h2>
                    {isActive ? <Collapse /> : <Expand />}
                </TitleContainer>
                {isActive && <div>{content}</div>}
            </FlexColumn>
        </AccordionContainer>
    );
};

export default Accordion;

const AccordionContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: solid 1px var(--accent-primary);
    padding-bottom: 2rem;
    cursor: pointer;
`;

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    svg {
        fill: var(--accent-primary);
        width: 36px;
        height: 36px;
    }
`;

const FlexColumn = styled.div`
    width: 100%;
`;
