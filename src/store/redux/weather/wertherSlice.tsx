import {v4} from "uuid"
import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"

import {WeatherState, WeatherData, WeatherError} from "./types"

const weatherInitialState: WeatherState = {
  weatherCard: undefined,
  weatherCardsArray: [],
  error: undefined,
  isLoading: false,
}


export const getWeather = createAsyncThunk("WEATHER/getWeather",
async (inputCity: string, { rejectWithValue }) => {
  const APP_ID: string = "3b16a96f6bb02d14c6afbe8fbbfafbcf";
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APP_ID}`)
  const result = await response.json() 
  if (!response.ok) {
    return rejectWithValue(result);
  }
  return result
})

const weatherSlice = createSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: {
    saveWeatherCard: (state: WeatherState) => {
      if (state.weatherCard) {
        state.weatherCardsArray = [...state.weatherCardsArray, state.weatherCard]
        state.weatherCard = undefined
      }
    },
    deleteWeatherCard: (state: WeatherState, { payload }: PayloadAction<string>) => {
      state.weatherCardsArray = [...state.weatherCardsArray].filter((weatherData) => weatherData.id !== payload)
      state.weatherCard = undefined
    },
    deleteErrorCard: (state: WeatherState) => {
      state.error = undefined
    },
    deleteAllWeatherCard: (state: WeatherState) => {
      state.weatherCardsArray = []
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getWeather.pending, (state: WeatherState) => {
      state.isLoading = true
      state.weatherCard = undefined
      state.error = undefined
    })
    .addCase(getWeather.fulfilled, (state: WeatherState, {payload}: PayloadAction<any>) => {
      state.isLoading = false
      state.weatherCard = {
        temp: `${Math.round(payload.main.temp - 273.15)}°`,
        city: payload.name,
        weatherLogo: `http://openweathermap.org/img/w/${payload.weather[0].icon}.png`, 
        id: v4()
      }
      // state.error = undefined
    })
    .addCase(getWeather.rejected, (state: WeatherState, {payload}: PayloadAction<any>) => {
      state.isLoading = false
      state.error = {cod: payload.cod, message: payload.message}
      // state.weatherCard = undefined
    })
    
  }
})

export const weatherActions = weatherSlice.actions

export const weatherReducers = weatherSlice.reducer