import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import {v4} from "uuid"

import {CatFactsGeneratorState, CatFactsData, CatFactsDataPayload} from "./types"

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
  reducers: {
    deleteFact: (state: CatFactsGeneratorState, {payload}: PayloadAction<string>) => {
      state.data = [...state.data].filter((factObj) => factObj.id !== payload )
    },
    deleteAllFacts: (state: CatFactsGeneratorState) => {
      state.data = []
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCatFact.pending, (state: CatFactsGeneratorState) => {
      state.isLoading = true
    })
    .addCase(getCatFact.fulfilled, (state: CatFactsGeneratorState, {payload}: PayloadAction<CatFactsDataPayload>) => {
      state.isLoading = false
      // state.data ? state.data = [...state.data, payload ] : state.data = [payload]
      state.data.push({...payload, id: v4()})
    })
    .addCase(getCatFact.rejected, (state: CatFactsGeneratorState, {payload}: PayloadAction<any>) => {
      state.isLoading = false
      state.error = payload
      alert("Ошибка сети")
    })
  }
})

export const catFactsGeneratorActions = CatFactsGeneratorSlice.actions

export const catFactsGeneratorReducers = CatFactsGeneratorSlice.reducer