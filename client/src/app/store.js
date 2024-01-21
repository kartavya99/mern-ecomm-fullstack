import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import authReduce from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReduce,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
