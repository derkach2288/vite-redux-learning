import {createSelector} from "@reduxjs/toolkit"

import {RootState} from "store/store"

const store = (state: RootState) => state

export const jokeGeneratorSelector = createSelector(store, (state) => state.jokeGenerator)