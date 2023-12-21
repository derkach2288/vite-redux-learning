import {
  WeatherInfoWrapper,
  TempContainer,
  WeatherTemp,
  WeatherCity,
  ImgContainer,
  Image,
} from "./styles";

  interface WeatherInfoProps {
    weatherData?: {
      temp: string;
      city: string;
      weatherLogo?: string;    
    }
  }

function WeatherInfo({weatherData}: WeatherInfoProps) {
  return (
    <WeatherInfoWrapper>
      <TempContainer>
        <WeatherTemp>{weatherData?.temp}</WeatherTemp>
        <WeatherCity>{weatherData?.city}</WeatherCity>
      </TempContainer>
      <ImgContainer>
        <Image id="weather-icon" src={weatherData?.weatherLogo} alt="weather-icon" />
      </ImgContainer>
    </WeatherInfoWrapper>
  );
}

export default WeatherInfo;
