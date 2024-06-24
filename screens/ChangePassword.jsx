import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextInput } from "react-native-paper";

import Header from "@/components/Header";
import { login } from "@/redux/actions/userActions";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";
import { useMessageAndErrorUser } from "@/utils/hooks";

const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch();

  const loading = useMessageAndErrorUser(navigation, dispatch, "profile");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <View style={defaultStyle}>
      <Header />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Change password</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          onChangeText={setOldPassword}
          value={oldPassword}
          secureTextEntry={true}
          placeholder="Old password"
        />

        <TextInput
          {...inputOptions}
          onChangeText={setNewPassword}
          value={newPassword}
          secureTextEntry={true}
          placeholder="New password"
        />

        <Button
          loading={loading}
          onPress={submitHandler}
          textColor={colors.color2}
          style={styles.btn}
          disabled={oldPassword === "" || newPassword === ""}
        >
          Change
        </Button>
      </View>
    </View>
  );
};


export default ChangePassword;