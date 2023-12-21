import {SearchWrapper, Loading} from "./styles"

import InputWeather from "components/InputWeather";
import ButtonWeather from "components/ButtonWeather";
import WeatherInfo from "pages/Weather/components/WeatherInfo";
import ErrorInfo from "pages/Weather/components/ErrorInfo";

interface WeatherData {
  temp: string;
  city: string;
  weatherLogo?: string;
}

interface WeatherError {
  errorCod: string;
  message: string;
}



function WeatherHome () {
  return (
  <>
  <SearchWrapper>
    <InputWeather placeholder="Enter city name" name="input-city" />
    <ButtonWeather  />
  </SearchWrapper>
  <Loading>Loading...</Loading>
    <WeatherInfo />
    <ErrorInfo />

  </>)
}

export default WeatherHome;