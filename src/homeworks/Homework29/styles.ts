import {styled} from "styled-components";
import {WeatherImage} from "../../assets"
// import { WeatherImage } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 30px;
  background-image: url(${WeatherImage});
  background-repeat: no-repeat;
  background-size: cover;

  
`;