import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  {
    products: [],
    product: {},
  },
  (builder) => {
    builder
      .addCase("getAllProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminProductsRequest", (state, action) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase("getProductsDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAllProductsSuccess", (state, action) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase("getAdminProductsSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.inStock = action.payload.inStock;
        state.outOfStock = action.payload.outOfStock;
      })
      .addCase("getAllProductsFail", (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase("getAdminProductsFail", (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase("getProductsDetailsFail", (state, action) => {
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
