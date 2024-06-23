import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "@/redux/reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

export const SERVER = "https://ecommerce-server-elpulga-8db230f3ade3.herokuapp.com/api/v1";