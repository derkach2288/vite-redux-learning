import {createSelector} from "@reduxjs/toolkit"

import {RootState} from "store/store"

export const catFactsGeneratorSelector = createSelector((state: RootState) => state, (state) => state.catFactsGenerator)