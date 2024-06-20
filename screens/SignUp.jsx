import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Avatar, Button, TextInput } from "react-native-paper";

import Footer from "@/components/Footer";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";

const Signup = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  let loading = false;

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("Yeah");

    navigation.navigate("verify");
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign up</Text>
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
          <View style={{ minHeight: 900 }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{ uri: avatar ? avatar : defaultImg }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change photo</Button>
            </TouchableOpacity>

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
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
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
              Sign up
            </Button>

            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              activeOpacity={0.8}
            >
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Signup;
