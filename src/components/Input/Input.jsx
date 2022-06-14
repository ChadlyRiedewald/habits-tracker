const Input = ({ name, label, type, textarea }) => {
    return (
        <label htmlFor={name}>
            {label}
            {textarea ? (
                <textarea name={name} />
            ) : (
                <input type={type} name={name} />
            )}
        </label>
    );
};

export default Input;
