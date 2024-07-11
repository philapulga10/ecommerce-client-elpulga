import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
  },
  (builder) => {
    builder
      .addCase("addToCart", (state, action) => {
        const item = action.payload;
        const isExist = state.cartItems.find((i) => i.product === item.product);

        if (isExist) {
          state.cartItems = state.cartItems.filter((i) => {
            return i.product === item.product ? item : i;
          });
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase("removeFromCart", (state, action) => {})
      .addCase("clearCart", (state, action) => {
        state.cartItems = [];
      });
  }
);
