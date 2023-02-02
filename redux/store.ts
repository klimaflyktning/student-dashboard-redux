import { configureStore } from "@reduxjs/toolkit";
import studentDetailsReducer from "./slices/studentDetailsSlice";

const reducer = {
  studentDetails: studentDetailsReducer,
};

export const store = configureStore({ reducer });

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
