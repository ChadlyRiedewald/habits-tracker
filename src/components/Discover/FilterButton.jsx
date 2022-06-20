import styled from 'styled-components/macro';

import * as B from '../Button';
import { ReactComponent as Filter } from '../../assets/filter.svg';
import { BREAKPOINTS } from '../../constants/breakpoints';

const FilterButton = ({ ...otherProps }) => {
    return (
        <Wrapper>
            <Button
                type='button'
                className='filter'
                border='true'
                {...otherProps}
            >
                <Filter />
                Filter
            </Button>
        </Wrapper>
    );
};

export default FilterButton;

const Wrapper = styled.div`
    width: clamp(200px, 100%, 550px);
    margin-inline: auto;
`;

const Button = styled(B.Inverted)`
    font-size: var(--font-xs);
    font-weight: var(--font-weight-normal);
    padding: var(--padding-xs) var(--padding-sm);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--padding-xs) * 0.5);

    svg {
        fill: var(--color-orange-400);
        width: 18px;
        height: 18px;
    }

    @media screen and ${BREAKPOINTS.sm} {
        font-size: var(--font-xxs);
    }
`;
