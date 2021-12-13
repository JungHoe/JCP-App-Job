import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../../actions/Counter";
interface CounterState {
  currnetNum: number;
}

const initialState = { currnetNum: 0 } as CounterState;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.increase, (state, action) => {
      console.log(action, "테스트");
      state.currnetNum += action.payload;
    })
    .addCase(actions.decrease, (state, action) => {
      console.log(action, "테스트");
      state.currnetNum -= action.payload;
    });
});

export default counterReducer;
