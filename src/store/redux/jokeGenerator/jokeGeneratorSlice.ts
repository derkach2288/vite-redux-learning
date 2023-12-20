import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import {JokeData, JokeGeneratorState} from "./types"

const jokeGeneratorInitialState: JokeGeneratorState = {
  data: null, // будем хранить успешно пришедшие данные ответа на запрос
  error: null, // будем хранить данные об ошибке
  isLoading: false, // это индикатор загрузки данных (спинер)
}

// создаем ассинхронный middleware фгнкцию Thunk через createAsyncThunk
export const getJoke = createAsyncThunk("JOKE_GENERATOR/getJoke", async () => {
  // Делаем get запрос на сервер
  const response = await fetch("https://official-joke-api.appspot.com/random_joke")
  const result = await response.json() 

  return result

} )

const jokeGeneratorSlice = createSlice({
  name: "JOKE_GENERATOR",
  initialState: jokeGeneratorInitialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      // Первым запускается pending
      .addCase(getJoke.pending, (state: JokeGeneratorState) => {
        state.data = null
        state.error = null
        state.isLoading = true
      })
      // когда данные пришли вызывается либо fulfilled либо rejected
      .addCase(getJoke.fulfilled, (state: JokeGeneratorState, {payload}: PayloadAction<JokeData>) => {
        state.isLoading = false
        state.data = payload
      })
      .addCase(getJoke.rejected, (state: JokeGeneratorState, {payload}: PayloadAction<any>) => {
        state.isLoading = false
        state.error = payload
      })
  },
})

export const jokeGeneratorActions = jokeGeneratorSlice.actions

export const jokeGeneratorReducers = jokeGeneratorSlice.reducer
