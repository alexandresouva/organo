import './Input.css';

const Input = ({
  type = 'text',
  label,
  placeholder,
  required,
  value,
  updateValue,
}) => {
  const updateInput = (e) => {
    updateValue(e.target.value);
  };

  return (
    <div className={`field field--${type} `}>
      <label>{label}</label>
      <input
        type={type}
        onChange={updateInput}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
