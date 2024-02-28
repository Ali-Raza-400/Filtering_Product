import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import counterReducer from "./counterSlice";
import blogSlice from "./blogSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    count: counterReducer,
    blog :blogSlice
  },
});
