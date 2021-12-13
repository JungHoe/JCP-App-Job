import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from "../../actionTypes/Counter";

export const increase = createAction(
  actionTypes.INCREASE_COUNT,
  (amount: number) => ({ payload: amount })
);

export const decrease = createAction(
  actionTypes.DECREASE_COUNT,
  (amount: number) => ({ payload: amount })
);

export const reset = createAction(actionTypes.RESET_COUNT);
