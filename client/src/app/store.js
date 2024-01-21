import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import authReduce from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReduce,
    cart: cartReducer,
  },
});
