// "use client";

// export const metadata = {
//   title: "animation",
//   description: "Page description",
// };
// import { motion } from "framer-motion";
// import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   Provider,
//   TypedUseSelectorHook,
//   useDispatch,
//   useSelector,
// } from "react-redux";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (s, action: PayloadAction<number>) => {
//       return {
//         ...s,
//         value: s.value + action.payload,
//       };
//     },
//   },
// });

// const { increment } = counterSlice.actions;

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// const useCounterDispatch = () => useDispatch<AppDispatch>();

// const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;

// const Animation1 = () => {
//   const dispatch = useCounterDispatch();

//   const value = useCounterSelector((state) => state.counter.value);

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           dispatch(increment(2));
//         }}
//       >
//         click
//       </button>
//       <h2>{value}</h2>
//     </div>
//   );
// };

// export default Animation1 = () => {
//   return (
//     <Provider store={store}>
//       <Animation1 />
//     </Provider>
//   );
// };
