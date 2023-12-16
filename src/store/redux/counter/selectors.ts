import { createSelector } from "@reduxjs/toolkit"

import {RootState} from "store/store"

// Забираем все, что лежит в глобальном стейте
const globalState = (state: RootState) => state

// Забиреам только то, что нам нужно, а именно состояние counter
// 1 аргемент - функция коллбэкБ которая возвращает глобальный стейт
// 2 аргумент - феункция коллбэкБ которая возвращает нужную часть из глобального стейта
export const counterState = createSelector(globalState, (state) => state.counter)