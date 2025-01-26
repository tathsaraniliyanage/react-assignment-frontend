// import {configureStore} from "@reduxjs/toolkit";
// import customerReducer from "../reducers/CustomerReducer";

// export const store = configureStore({
//     reducer :{
//         customer : customerReducer
//     }
// })





// import { configureStore } from "@reduxjs/toolkit";
// import customerReducer from "../reducers/CustomerReducer";

// export const store = configureStore({
//   reducer: {
//     customer: customerReducer,
//   },
// });

// // Types for dispatch and state
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;





import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../reducers/CustomerReducer";

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;