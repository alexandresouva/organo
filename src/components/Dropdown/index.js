import './Dropdown.css';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = (props) => {
  const updateTextInput = (e) => {
    console.log(props.items);
    props.updateValue(e.target.value);
  };
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={updateTextInput}
        required={props.required}
      >
        {props.items.map((item) => (
          <option key={uuidv4()}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
