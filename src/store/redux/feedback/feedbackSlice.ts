import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  countLike: 0,
  countDisLike: 0,
}

const feedbackSlice = createSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: {
    addLike: (state) => {state.countLike += 1},
    addDisLike: (state) => {state.countDisLike += 1 },
    resetResults: (state) => { state.countDisLike = 0, state.countLike = 0}
  },
})

export const actions = feedbackSlice.actions;

export default feedbackSlice.reducer;