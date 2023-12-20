import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import {CatFactsGeneratorState, CatFactsData} from "./types"

const catFactsGeneratorInitialState: CatFactsGeneratorState = {
  data: [],
  error: null,
  isLoading: false,
}

export const getCatFact = createAsyncThunk("CAT_FACT_GENERATOR", async () => {
  const response = await fetch("https://catfact.ninja/fact")
  const result = await response.json()
  console.log(result);

  return result
})

const CatFactsGeneratorSlice = createSlice({
  name: "CAT_FACT_GENERATOR",
  initialState: catFactsGeneratorInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCatFact.pending, (state: CatFactsGeneratorState) => {
      state.isLoading = true
    })
    .addCase(getCatFact.fulfilled, (state: CatFactsGeneratorState, {payload}: PayloadAction<CatFactsData>) => {
      state.isLoading = false
      // state.data ? state.data = [...state.data, payload ] : state.data = [payload]
      state.data.push(payload)
    })
    .addCase(getCatFact.rejected, (state: CatFactsGeneratorState, {payload}: PayloadAction<any>) => {
      state.isLoading = false
      state.error = payload
    })
  }
})

export const catFactsGeneratorActions = CatFactsGeneratorSlice.actions

export const catFactsGeneratorReducers = CatFactsGeneratorSlice.reducer