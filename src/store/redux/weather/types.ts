export interface WeatherState {
  weatherCard: undefined | WeatherData
  weatherCardsArray: WeatherData[]
  error: undefined | WeatherError
  isLoading: boolean
}

export interface WeatherData {
  temp: string
  city: string
  weatherLogo: string
  id: string
}

export interface WeatherError {
  cod: string;
  message: string;

}