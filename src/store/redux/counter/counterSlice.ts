import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import {CounterInitialState} from "./types"

// Это наше дефолтное состояние для counter state
const counterInitialState: CounterInitialState = {
  count: 0,
}

// создаем slice - это функция, которая передает данные в глобальный стор,
// создает reducers и actions

const counterSlice = createSlice({
  // name имя, по которому следим за состоянием в сторе, будем по этому имени следить за изменением стейта в Redux Devtools
  name: "COUNTER",
  // создаем стейт для стора, передав ему initialValue
  initialState: counterInitialState,
  // reducers - это функция, которая меняет стейт и принимает в себя 2 аргумента:
  // 1. аргумент - это текущее состояние стейта (аналог prevValue useState)
  // 2. это принимающий аргумент
  reducers: {
    add: (state: CounterInitialState) => {
      // console.log(state);
      state.count = state.count + 1
    },
    minus: (state: CounterInitialState) => {
      state.count = state.count - 1
    },
    multiply: (state: CounterInitialState, action: PayloadAction<number>) => {
      console.log(action);
      state.count = state.count * action.payload
    },
    divide: (state: CounterInitialState, {payload=2}: PayloadAction<number | undefined>) => {
      state.count = state.count / payload
    },
  },
})

// actions - это наши экшены, которые будем диспачить, т.е. говорить store, какой редюсер вызвать
export const actions = counterSlice.actions

// передаем в стор
export const counterReducer = counterSlice.reducer
