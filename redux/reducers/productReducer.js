import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    products: [],
    product: {},
  },
  (builder) => {
    builder
      .addCase("getAllProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminProductsRequest", (state) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase("getProductsDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminProductSuccess", (state) => {
        state.loading = true;
        state.products = action.payload;
        state.inStock = action.payload.inStock;
        state.outOfStock = action.payload.outOfStock;
      })
      .addCase("getAllProductsFail", (state) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase("getAdminProductsFail", (state) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase("getProductsDetailsFail", (state) => {
        state.loading = true;
        state.error = action.payload;
      });

    builder.addCase("clearError", (state) => {
      state.error = null;
    });

    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);
