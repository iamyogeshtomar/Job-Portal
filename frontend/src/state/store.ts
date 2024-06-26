import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidate/candidateSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  // reducers will be added later
  reducer: { candidateReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
