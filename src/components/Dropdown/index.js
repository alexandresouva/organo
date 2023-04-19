import './Dropdown.css';

const Dropdown = (props) => {
  const updateTextInput = (e) => {
    props.updateValue(e.target.value);
  };
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select onChange={updateTextInput} required={props.required}>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
