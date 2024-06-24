import axios from "axios";

import { SERVER } from "@/redux/store";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${SERVER}/user/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: "loginSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`${SERVER}/user/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get(`${SERVER}/user/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({ 
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
