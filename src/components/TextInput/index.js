import './TextInput.css';

const TextInput = (props) => {
  const updateTextInput = (e) => {
    props.updateValue(e.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        onChange={updateTextInput}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default TextInput;
