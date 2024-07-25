import axios from "axios";

import { SERVER } from "@/redux/store";

export const getAllProducts = (keyword, category) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(
      `${SERVER}/product/all?keyword=${keyword}&category=${category}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminProductsRequest",
    });

    const { data } = await axios.get(`${SERVER}/product/admin`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAdminProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFail",
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductsDetailsRequest",
    });

    const { data } = await axios.get(`${SERVER}/product/single/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getProductDetailsSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFail",
      payload: error.response.data.message,
    });
  }
};
