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
import ItemReducer from "../reducers/ItemReducer";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    Item : ItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;