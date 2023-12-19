import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {v4} from "uuid"

import { UsersState, User, AddUserPayload } from "./type"

const usersInitialState: UsersState = {
  users: [],
}

const usersSlice = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    addUser: (state: UsersState, { payload }: PayloadAction<AddUserPayload>) => {
      state.users = [ ...state.users, {...payload, id: v4()} ]
    },
    deleteUser: (state: UsersState, {payload}: PayloadAction<string>) => {
      state.users = [...state.users].filter((userObject) => userObject.id !== payload)
    },
    deleteAllUsers: () => usersInitialState
  },
})

export const usersActions = usersSlice.actions

export const usersReducers = usersSlice.reducer