import styled from 'styled-components/macro';
import { Inverted } from '../Button';
import { ReactComponent as Filter } from '../../assets/filter.svg';

const FilterDropdownMenu = () => {
    return (
        <Wrapper>
            <Inverted type='button' alignSelf='flex-end' className='filter'>
                <Filter />
                Filter
            </Inverted>
        </Wrapper>
    );
};

export default FilterDropdownMenu;

const Wrapper = styled.div`
    display: flex;
    width: clamp(200px, 85vw, 550px);
    margin-inline: auto;
`;
