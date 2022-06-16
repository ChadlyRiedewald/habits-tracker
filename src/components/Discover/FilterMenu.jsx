import styled from 'styled-components/macro';
import { Inverted } from '../Button';
import { ReactComponent as Filter } from '../../assets/filter.svg';

const FilterMenu = () => {
    return (
        <Wrapper>
            <Inverted type='button' className='filter' small>
                <Filter />
                Filter
            </Inverted>
        </Wrapper>
    );
};

export default FilterMenu;

const Wrapper = styled.div`
    width: clamp(200px, 100%, 550px);
    margin-inline: auto;
`;
