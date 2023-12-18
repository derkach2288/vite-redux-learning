import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { UsersState, User } from "./type"

const usersInitialState: UsersState = {
  users: [],
}

const usersSlice = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    addUser: (state: UsersState, { payload }: PayloadAction<User>) => {
      state.users = [ ...state.users, payload ]
    },
  },
})

export const usersActions = usersSlice.actions

export const usersReducers = usersSlice.reducer