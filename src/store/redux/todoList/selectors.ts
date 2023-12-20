import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "store/store";
import { g, s } from "vitest/dist/types-e3c9754d.js";

const globalState = (state: RootState) => state;

export const todoListState = createSelector(globalState, (state) => state.todoList.notes )