import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import Header from "@/components/Header";

import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  let loading = false;

  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("Yeah");
  };

  return (
    <View style={defaultStyle}>
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Edit profile</Text>
      </View>

      <ScrollView
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <TextInput
            {...inputOptions}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholder="Email"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setAdress}
            value={address}
            placeholder="Address"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setCity}
            value={city}
            placeholder="City"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setCountry}
            value={country}
            placeholder="Country"
          />

          <TextInput
            {...inputOptions}
            onChangeText={setPinCode}
            value={pinCode}
            placeholder="Pin code"
          />

          <Button
            loading={loading}
            onPress={submitHandler}
            textColor={colors.color2}
            style={styles.btn}
            disabled={disableBtn}
          >
            Update
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
