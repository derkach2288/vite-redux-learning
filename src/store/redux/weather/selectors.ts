import {createSelector} from "@reduxjs/toolkit"

import {RootState} from "store/store"

const globalState = (state: RootState) => state

export const weatherSelector = createSelector(globalState, (state) => state.weatherData)