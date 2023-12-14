import { createSlice } from "@reduxjs/toolkit"

// Это наше дефолтное состояние при инициализации приложения
const counterInitialState = {
  count: 0,
}

// создаем slice - это функция, которая передает данные в глобальный стор,
// создает reducers и actions

const counterSlice = createSlice({
  name: "COUNTER", // имя, по которому следим за состоянием в сторе
  initialState: counterInitialState, // создаем стейт для стора, передав ему initialValue
  reducers: {
    add: (state) => {
      state.count += 1
    },
  },
})

export const actions = counterSlice.actions

export const counterReducer = counterSlice.reducer
