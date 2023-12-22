import { useState, ChangeEvent, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {AppDispatch} from "store/store"
import { weatherSelectorState } from "store/redux/weather/selectors"
import { getWeather, weatherActions } from "store/redux/weather/wertherSlice"
import { WeatherData, WeatherError } from "store/redux/weather/types"

import { SearchWrapper, Loading } from "./styles"

import InputWeather from "components/InputWeather"
import ButtonWeather from "components/ButtonWeather"
import WeatherInfo from "pages/Weather/components/WeatherInfo"
import ErrorInfo from "pages/Weather/components/ErrorInfo"

// interface WeatherData {
//   temp: string;
//   city: string;
//   weatherLogo?: string;
// }

// interface WeatherError {
//   errorCod: string;
//   message: string;
// }

function WeatherHome() {
  const [inputCity, setInputCity] = useState<string>("")
  const dispatch: AppDispatch = useDispatch()
  const {weatherCard, weatherCardsArray, error, isLoading} = useSelector(weatherSelectorState)

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputCity(event.target.value)
  }

  return (
    <>
      <SearchWrapper>
        <InputWeather
          value={inputCity}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChangeInput(event)
          }}
          placeholder="Enter city name"
          name="input-city"
        />
        <ButtonWeather
          onClick={() => {
            if (inputCity.trim().length > 0) {
              dispatch(getWeather(inputCity.trim()))
              setInputCity("")
            } else {
              return alert("Please enter a city name")
            }
          }}
        />
      </SearchWrapper>
      {isLoading && <Loading>Loading...</Loading>}
       {weatherCard && <WeatherInfo
        temp={weatherCard.temp}
        city={weatherCard.city}
        weatherLogo={weatherCard.weatherLogo}
        isShowOnlyDeleteButton={false}
        onDelete={() => {
          dispatch(weatherActions.deleteWeatherCard(weatherCard.id))
        }}
        onSave={() => {
          dispatch(weatherActions.saveWeatherCard())
        }}
      />}
      {error&& <ErrorInfo cod={error.cod} message={error.message} onDelete={() => {
        dispatch(weatherActions.deleteErrorCard())
      }}/>}
    </>
  )
}

export default WeatherHome
