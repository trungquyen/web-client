import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const rootRSlice = combineReducers({
  user: userSlice,
  cart: cartSlice,
});

export const store = configureStore({
  reducer: rootRSlice,
});

export default store;
