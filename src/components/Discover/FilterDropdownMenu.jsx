import styled from 'styled-components/macro';
import { Inverted } from '../Button';
import { ReactComponent as Filter } from '../../assets/filter.svg';

const FilterDropdownMenu = () => {
    return (
        <Wrapper>
            <Inverted type='button' className='filter' round>
                <Filter />
                Filter
            </Inverted>
        </Wrapper>
    );
};

export default FilterDropdownMenu;

const Wrapper = styled.div`
    width: clamp(200px, 100%, 550px);
    margin-inline: auto;
`;
