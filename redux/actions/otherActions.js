import axios from "axios";

import { SERVER } from "@/redux/store";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "upadtePasswordRequest",
      });

      const { data } = await axios.put(
        `${SERVER}/user/change-password`,
        { oldPassword, newPassword },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("data = ", data);

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      console.log("error = ", error.response.data.message);

      dispatch({
        type: "updatePasswordFail",
        payload: error.response.data.message,
      });
    }
  };
