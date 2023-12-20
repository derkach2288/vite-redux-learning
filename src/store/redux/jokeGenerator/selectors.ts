import {createSelector} from "@reduxjs/toolkit"

import {RootState} from "store/store"
import { s } from "vitest/dist/types-e3c9754d.js"

const store = (state: RootState) => state

export const jokeGeneratorSelector = createSelector(store, (state) => state.jokeGenerator)