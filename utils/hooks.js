import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import axios from "axios";
import { SERVER } from "@/redux/store";

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  navigateTo = "login"
) => {
  const {
    loading,
    message,
    error,
    // isAuthenticated
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });

      dispatch({
        type: "clearError",
      });
    }

    if (message && message !== "Not logged in") {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });

      Toast.show({
        type: "success",
        text1: message,
      });

      dispatch({
        type: "clearMessage",
      });
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useMessageAndErrorOther = (
  dispatch,
  navigation,
  navigateTo,
  func
) => {
  const { loading, message, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });

      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });

      dispatch({
        type: "clearMessage",
      });

      navigateTo ? navigation.navigate(navigateTo) : null;

      func ? dispatch(func()) : null;
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios
      .get(`${SERVER}/product/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: err.response.data.error,
        });
      });
  }, [isFocused]);
};
