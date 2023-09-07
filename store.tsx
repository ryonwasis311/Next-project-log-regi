import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/message";

const reducer = {
    message:messageReducer
 }
 export type RootState = ReturnType<typeof store.getState>
 
 export const store =configureStore({
    reducer:reducer,
    devTools: true,
 })

