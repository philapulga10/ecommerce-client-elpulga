import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import {
  defaultStyle,
  formHeading,
  colors,
  inputOptions,
  inputStyling,
} from "@/styles/styles";
import Header from "@/components/Header";
import { Avatar, Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const NewProduct = ({ navigation }) => {
  const loading = false;

  const [
    image,
    // setImage
  ] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [categoryId, setCategoryId] = useState("");
  const [
    categories,
    // setCategories
  ] = useState([
    { _id: 1, category: "Electronics" },
    { _id: 2, category: "Clothes" },
    { _id: 3, category: "Shoes" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, category, categoryId);
  };

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}
      >
        <Header back={true} />

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                height: 650,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                  marginBottom: 20,
                  backgroundColor: "red",
                }}
              >
                <Avatar.Image
                  style={{
                    backgroundColor: colors.color1,
                  }}
                  size={80}
                  source={{
                    uri: image ? image : null,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("camera", {
                      newProduct: true,
                    });
                  }}
                >
                  <Avatar.Icon
                    style={{
                      backgroundColor: colors.color2,
                      position: "absolute",
                      bottom: 0,
                      right: -5,
                    }}
                    icon="camera"
                    size={30}
                    color={colors.color3}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                {...inputOptions}
                value={name}
                onChangeText={setName}
                placeholder="Name"
              />
              <TextInput
                {...inputOptions}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
              />
              <TextInput
                {...inputOptions}
                value={price}
                onChangeText={setPrice}
                keyboardType="number-pad"
                placeholder="Price"
              />
              <TextInput
                {...inputOptions}
                value={stock}
                onChangeText={setStock}
                keyboardType="number-pad"
                placeholder="Stock"
              />

              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>

              <Button
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                textColor={colors.color2}
              >
                Create
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryId={setCategoryId}
        categories={categories}
      />
    </>
  );
};

export default NewProduct;
