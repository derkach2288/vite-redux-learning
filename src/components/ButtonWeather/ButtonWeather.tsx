import { ButtonComponent } from "./styles";

import { ButtonProps } from "./types";

function ButtonWeather({
  name = "Search",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
}

export default ButtonWeather;