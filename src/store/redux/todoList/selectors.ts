import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "store/store";

const globalState = (state: RootState) => state;

export const todoListState = createSelector(globalState, (state) => state.todoList.notes )