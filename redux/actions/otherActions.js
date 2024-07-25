import axios from "axios";

import { SERVER } from "@/redux/store";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "upadtePasswordRequest",
      });

      const { data } = await axios.put(
        `${SERVER}/user/changepassword`,
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
      dispatch({
        type: "updatePasswordFail",
        payload: error.response.data.message,
      });
    }
  };
