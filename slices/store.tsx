
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import messageReducer from "./message";
import postDataSlice from "./postdata";
import authReducer from "./auth";

const reducer = {
    message:messageReducer,
    postData:postDataSlice,
    auth:authReducer,
 }
 export const store =configureStore({
    reducer:reducer,
    devTools: true,
 })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType =void> =ThunkAction<
 ReturnType,
 RootState,
 unknown,
 Action<string>
> 

