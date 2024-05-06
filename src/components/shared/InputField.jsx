import { capitalize } from "../../utils/string-util";

export default function InputFeild({
  id,
  type,
  inputName,
  label,
  value,
  state,
  onchange,
}) {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id}>{capitalize(label)}</label>

      <input
        type={type}
        id={id}
        name={inputName}
        defaultValue={value}
        placeholder={label}
        maxLength="100"
        onChange={(e) => onchange(inputName, e.target.value, state)}
      />
    </div>
  );
}
