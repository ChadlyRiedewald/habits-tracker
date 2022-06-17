import Checkbox from '../Checkbox/Checkbox';
import styled from 'styled-components/macro';
import MobileOnly from '../MobileOnly';
import S from '../Subtitle';
import Title from '../Title';
import { BREAKPOINTS } from '../../constants/breakpoints';
import * as Button from '../Button';

const FilterMobile = ({ setModal }) => {
    return (
        <MobileOnly width={true}>
            <Subtitle>Type</Subtitle>
            <FilterItems>
                <Checkbox label='Sports' />
                <Checkbox label='Mind' />
                <Checkbox label='Hobby' />
                <Checkbox label='Food' />
                <Checkbox label='Health' />
                <Checkbox label='Study' />
                <Checkbox label='Social' />
                <Checkbox label='Finance' />
                <Checkbox label='Business' />
            </FilterItems>
            <ButtonWrapper>
                <Button.Inverted
                    border={true}
                    small={true}
                    onClick={() => setModal(false)}
                >
                    Cancel
                </Button.Inverted>
                <Button.Base small={true} onClick={() => setModal(false)}>
                    Apply
                </Button.Base>
            </ButtonWrapper>
        </MobileOnly>
    );
};

export default FilterMobile;

const FilterItems = styled.div`
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
