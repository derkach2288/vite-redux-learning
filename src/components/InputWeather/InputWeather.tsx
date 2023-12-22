import { InputComponent } from "./styles";

import { InputProps } from "./types";

function InputWeather({
  placeholder,
  disabled = false,
  name,
  value,
  onChange,
  type = "text",
}: InputProps) {
  const inputId = `${name}-${Math.random()}`;

  return (
      <InputComponent
        value={value}
        onChange={onChange}
        name={name}
        id={inputId}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
  );
}

export default InputWeather;
