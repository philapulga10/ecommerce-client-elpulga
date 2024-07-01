import { View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera/legacy";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

import { colors, defaultStyle } from "@/styles/styles";

const MyIcon = ({ icon, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <Avatar.Icon
        style={{ backgroundColor: colors.color1 }}
        color={colors.color2}
        size={40}
        icon={icon}
      />
    </TouchableOpacity>
  );
};

const CameraComponent = ({ navigation, route }) => {
  const [camera, setCamera] = useState(null);

  const [type, setType] = useState(CameraType.back);
  const [hasPermisstion, setHasPermisstion] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (route.params?.newProduct) {
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });
    }
    if (route.params?.updateProduct) {
      return navigation.navigate("productimages", {
        image: data.assets[0].uri,
      });
    }
    if (route.params?.updateProfile) {
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    } else {
      return navigation.navigate("signup", {
        image: data.assets[0].uri,
      });
    }
  };

  const clickPicture = async () => {
    const data = await camera.takePictureAsync();

    if (route.params?.newProduct) {
      return navigation.navigate("newproduct", {
        image: data.uri,
      });
    }
    if (route.params?.updateProduct) {
      return navigation.navigate("productimages", {
        image: data.uri,
      });
    }
    if (route.params?.updateProfile) {
      return navigation.navigate("profile", {
        image: data.uri,
      });
    } else {
      return navigation.navigate("signup", {
        image: data.uri,
      });
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermisstion(status === "granted");
    })();
  }, []);

  if (hasPermisstion === null) {
    return <View />;
  }

  if (hasPermisstion === false) {
    return (
      <View style={defaultStyle}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
        style={{ flex: 1, aspectRatio: 1 }}
        type={type}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />

      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon icon="camera-flip" handler={() => {}} />
      </View>
    </View>
  );
};

export default CameraComponent;
