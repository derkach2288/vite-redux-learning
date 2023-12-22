import Button from "components/Button"
import {
  WeatherInfoWrapper,
  InfoContainer,
  ButtonsContainer,
  TempContainer,
  WeatherTemp,
  WeatherCity,
  ImgContainer,
  Image,
} from "./styles"

interface WeatherInfoProps {
  temp: string
  city: string
  weatherLogo: string
  isShowOnlyDeleteButton: boolean
  onDelete: any
  onSave?: any
}

function WeatherInfo({
  temp,
  city,
  weatherLogo,
  isShowOnlyDeleteButton,
  onDelete,
  onSave
}: WeatherInfoProps) {
  return (
    <WeatherInfoWrapper>
      <InfoContainer>
        <TempContainer>
          <WeatherTemp>{temp}</WeatherTemp>
          <WeatherCity>{city}</WeatherCity>
        </TempContainer>
        <ImgContainer>
          <Image id="weather-icon" src={weatherLogo} alt="weather-icon" />
        </ImgContainer>
      </InfoContainer>
      <ButtonsContainer>
        {!isShowOnlyDeleteButton && <Button name="Save" onClick={onSave}/>}
        <Button name="Delete" onClick={onDelete}/>
      </ButtonsContainer>
    </WeatherInfoWrapper>
  )
}

export default WeatherInfo
