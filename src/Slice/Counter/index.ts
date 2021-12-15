import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  currentCount: number;
}

export interface changeParameter {
  amount: number;
}

const initialState: CounterState = {
  currentCount: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount(state, action: PayloadAction<changeParameter>) {
      state.currentCount += action.payload.amount;
    },
    decreaseCount(state, action: PayloadAction<changeParameter>) {
      state.currentCount -= action.payload.amount;
    },
    asyncIncreaseCount(state, action: PayloadAction<changeParameter>) {},
    asyncDecreaseCount(state, action: PayloadAction<changeParameter>) {},
    resetCounter() {
      return initialState;
    },
  },
});

export const actions = counterSlice.actions;
export default counterSlice.reducer;
