import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import mime from "mime";

import Footer from "@/components/Footer";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "@/styles/styles";
import { register } from "@/redux/actions/userActions";
import { useMessageAndErrorUser } from "@/utils/hooks";

const Signup = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const dispatch = useDispatch();

  const loading = useMessageAndErrorUser(navigation, dispatch, "profile");

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("address", address);
    myForm.append("city", city);
    myForm.append("country", country);
    myForm.append("pinCode", pinCode);

    if (avatar !== "") {
      myForm.append("file", {
        uri: avatar,
        type: mime.getType(avatar),
        name: avatar.split("/").pop(),
      });
    }

    dispatch(register(myForm));
  };

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params]);

  return (
    <>
      <View style={defaultStyle}>
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
