import styled from 'styled-components/macro';

const Checkbox = ({ label }) => {
    return (
        <Label>
            <input type='checkbox' className='checkbox' />
            {label}
        </Label>
    );
};

export default Checkbox;

const Label = styled.label`
    flex-direction: row;
    gap: var(--padding-sm);

    & > .checkbox[type='checkbox'] {
        padding: 0;
        margin: 0;
        width: var(--padding-md);
        height: var(--padding-md);
        vertical-align: middle;
        -webkit-appearance: none;
        border: 0;
        outline: 0;
        flex-grow: 0;
        border-radius: var(--padding-xs);
        background-color: var(--color-gray-100);
        transition: background 300ms;
        cursor: pointer;

        &::before {
            content: '';
            left: 0;
            top: 0;
            color: transparent;
            display: block;
            width: inherit;
            height: inherit;
            border-radius: inherit;
            border: 0;
            background-color: transparent;
            background-size: contain;
            box-shadow: inset 0 0 0 1px #ccd3d8;
        }

        &:checked {
            background-color: var(--color-orange-400);

            &::before {
                box-shadow: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
            }
        }
    }
`;
