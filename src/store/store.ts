import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import { counterReducer } from "./redux/counter/counterSlice"
import feedbackReducer from "./redux/feedback/feedbackSlice"
import { usersReducers } from "./redux/users/usersSlice"
import {todoListReducers} from "./redux/todoList/todoListSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedback: feedbackReducer,
    users: usersReducers,
    todoList: todoListReducers
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
