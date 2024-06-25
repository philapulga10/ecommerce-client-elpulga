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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  let loading = false;

  const submitHandler = () => {
    alert("Yeah");

    navigation.navigate("login");
  };

  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Reset password</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            onChangeText={setOtp}
            value={otp}
            keyboardType="number-pad"
            placeholder="OTP"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="New password"
          />

          <Button
            loading={loading}
            onPress={submitHandler}
            textColor={colors.color2}
            style={styles.btn}
            disabled={otp === "" || password === ""}
          >
            Reset
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("forgetpassword")}
            activeOpacity={0.8}
          >
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;
