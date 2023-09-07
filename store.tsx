import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/message";

const reducer = {
    message:messageReducer
 }

 export const store =configureStore({
    reducer:reducer,
    devTools: true,
 })