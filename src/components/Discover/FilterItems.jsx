import { Fragment } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const FilterItems = () => {
    return (
        <Fragment>
            <Checkbox label='Sports' />
            <Checkbox label='Mind' />
            <Checkbox label='Hobby' />
            <Checkbox label='Food' />
            <Checkbox label='Health' />
            <Checkbox label='Study' />
            <Checkbox label='Social' />
            <Checkbox label='Finance' />
            <Checkbox label='Business' />
        </Fragment>
    );
};

export default FilterItems;
