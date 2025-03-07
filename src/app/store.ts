import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
});

export type TStore = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch