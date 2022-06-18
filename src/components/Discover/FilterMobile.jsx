import styled from 'styled-components/macro';

import * as Button from '../Button';
import MobileOnly from '../MobileOnly';
import S from '../Subtitle';
import Title from '../Title';
import { BREAKPOINTS } from '../../constants/breakpoints';
import FilterItems from './FilterItems';

const FilterMobile = ({ setModal }) => {
    return (
        <MobileOnly width='true'>
            <Subtitle>Type</Subtitle>
            <FilterItemsWrapper>
                <FilterItems />
            </FilterItemsWrapper>
            <ButtonWrapper>
                <Button.Inverted
                    border='true'
                    small='true'
                    onClick={() => setModal(false)}
                >
                    Cancel
                </Button.Inverted>
                <Button.Base small='true' onClick={() => setModal(false)}>
                    Apply
                </Button.Base>
            </ButtonWrapper>
        </MobileOnly>
    );
};

export default FilterMobile;

const FilterItemsWrapper = styled.div`
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding-block: var(--padding-sm);
    padding-inline: var(--padding-md);
    gap: calc(var(--padding-sm) * 1);

    @media screen and ${BREAKPOINTS.sm} {
        max-height: 210px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    ${Title} {
        text-align: center;
    }
`;

const Subtitle = styled(S)`
    padding-left: var(--padding-md);
    padding-block: var(--padding-sm);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-block: var(--padding-sm);
    gap: var(--padding-sm);
`;
