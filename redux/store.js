import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "@/redux/reducers/userReducer";
import { productReducer } from "@/redux/reducers/productReducer";
import { cartReducer } from "@/redux/reducers/cartReducer";
import { otherReducer } from "@/redux/reducers/otherReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    other: otherReducer,
  },
});

export const SERVER =
  "https://ecommerce-server-elpulga-8db230f3ade3.herokuapp.com/api/v1";
