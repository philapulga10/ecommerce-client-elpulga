import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";
import Footer from "@/components/Footer";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  let loading = false;

  const submitHandler = () => {
    alert("Yeah");

    navigation.navigate("verify");
  };

  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Forget password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholder="Email"
          />

          <Button
            loading={loading}
            onPress={submitHandler}
            textColor={colors.color2}
            style={styles.btn}
            disabled={email === ""}
          >
            Send OTP
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            activeOpacity={0.8}
          >
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;
