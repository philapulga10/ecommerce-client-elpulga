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
      type: "loginRequest",
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message
    });
  }
};
