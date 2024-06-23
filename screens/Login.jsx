import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextInput } from "react-native-paper";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { login } from "@/redux/actions/userActions";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";
import Footer from "@/components/Footer";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, message, error, isAuthenticated } = useSelector((state) => state.user)

  console.log("message", { message, error, isAuthenticated });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    alert("Yeah");

    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });

      dispatch({
        type: "clearError"
      });
    }

    if (message) {
      navigation.navigate("profile");

      Toast.show({
        type: "success",
        text1: message,
      });

      dispatch({
        type: "clearMessage"
      });
    }
  }, [error, message]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholder="Email"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forget}>Forget password?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            onPress={submitHandler}
            textColor={colors.color2}
            style={styles.btn}
            disabled={email === "" || password === ""}
          >
            Log in
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            activeOpacity={0.8}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
