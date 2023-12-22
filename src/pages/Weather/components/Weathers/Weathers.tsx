import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "store/store"
import { weatherSelectorState } from "store/redux/weather/selectors"
import { getWeather, weatherActions } from "store/redux/weather/wertherSlice"
import { WeatherData, WeatherError } from "store/redux/weather/types"

import { WeathersWrapper, ButtonContainer } from "./styles"
import WeatherInfo from "pages/Weather/components/WeatherInfo"
import ButtonWeather from "components/ButtonWeather"

function Weathers() {
  const dispatch: AppDispatch = useDispatch()
  const { weatherCard, weatherCardsArray, error, isLoading } =
    useSelector(weatherSelectorState)

  return (
    <>
      {weatherCardsArray.length > 0 && (
        <WeathersWrapper>
          {weatherCardsArray.map((weatherInfo: WeatherData) => (
            <WeatherInfo
              temp={weatherInfo.temp}
              city={weatherInfo.city}
              weatherLogo={weatherInfo.weatherLogo}
              isShowOnlyDeleteButton={true}
              onDelete={() => {
                dispatch(weatherActions.deleteWeatherCard(weatherInfo.id))
              }}
            />
          ))}
          <ButtonContainer>
            <ButtonWeather name="Delete all cards" onClick={() => {
              dispatch(weatherActions.deleteAllWeatherCard())
            }}/>
          </ButtonContainer>
        </WeathersWrapper>
      )}
    </>
  )
}

export default Weathers
