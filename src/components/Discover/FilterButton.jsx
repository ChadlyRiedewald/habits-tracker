import styled from 'styled-components/macro';

import * as Button from '../Button';
import { ReactComponent as Filter } from '../../assets/filter.svg';

const FilterButton = ({ ...otherProps }) => {
    return (
        <Wrapper>
            <Button.InvertedXS type='button' border='true' {...otherProps}>
                Filter
                <Filter />
            </Button.InvertedXS>
        </Wrapper>
    );
};

export default FilterButton;

const Wrapper = styled.div`
    width: clamp(200px, 100%, 550px);
    margin-inline: auto;
`;
