import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../../actions/Counter";
interface CounterState {
  currnetNum: number;
}

const initialState = { currnetNum: 0 } as CounterState;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.increase, (state, action) => {
      console.log(action, "call increase");
      state.currnetNum += action.payload;
    })
    .addCase(actions.decrease, (state, action) => {
      console.log(action, "call decrease");
      state.currnetNum -= action.payload;
    })
    .addCase(actions.reset, (state, action) => {
      console.log("call reset");
      return initialState;
    });
});

export default counterReducer;
