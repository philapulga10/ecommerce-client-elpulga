import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Avatar, Button } from "react-native-paper";

import Header from "@/components/Header";
import { colors, defaultStyle, formHeading } from "@/styles/styles";

const ProductImages = ({ navigation, route }) => {
  const [images] = useState(route.params.images);
  const [
    // productId
  ] = useState(route.params.id);
  const [
    image,
    // setImage
  ] = useState(null);
  const [
    imageChanged,
    // setImageChanged
  ] = useState(false);

  const loading = false;

  const deleteHandler = (id) => {
    console.log(id);
  };

  const submitHandler = () => {};

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header />

      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
        }}
      >
        <Text style={formHeading}>Images</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((image) => (
            <ImageCard
              key={image._id}
              src={image.url}
              id={image._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{
            uri: image,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("camera", { updateProduct: true });
            }}
            activeOpacity={0.8}
          >
            <Avatar.Icon
              style={{ backgroundColor: colors.color2 }}
              icon="camera"
              size={30}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>

        <Button
          onPress={submitHandler}
          style={{
            backgroundColor: colors.color1,
            padding: 6,
          }}
          textColor={colors.color2}
          loading={loading}
          disabled={!imageChanged}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;
