import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextInput } from "react-native-paper";

import Header from "@/components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";
import { useMessageAndErrorOther } from "@/utils/hooks";
import { updatePassword } from "@/redux/actions/otherActions";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const loading = useMessageAndErrorOther(dispatch);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = () => {
    dispatch(updatePassword(oldPassword, newPassword));
    setOldPassword("");
    setNewPassword("");
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
