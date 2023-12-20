import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {v4} from "uuid"

import { TodoListState, Note, AddNotePayload } from "./types"

const todoListInitialState: TodoListState = {
  notes: [],
}

const todolistSlice = createSlice({
  name: "TODOLIST",
  initialState: todoListInitialState,
  reducers: {
    addNote: (state: TodoListState, {payload}: PayloadAction<AddNotePayload>) => {
      state.notes = [...state.notes, {...payload, id: v4()}]
    },
    deleteNote: (state: TodoListState, {payload}: PayloadAction<string>) => {
      state.notes = [...state.notes].filter((noteObj) => noteObj.id !== payload)
    },
    deleteTodoList: () => todoListInitialState
  }
})

export const todoListActions = todolistSlice.actions

export const todoListReducers = todolistSlice.reducer