import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";

import {
  defaultStyle,
  formHeading,
  colors,
  inputOptions,
  inputStyling,
} from "@/styles/styles";
import Header from "@/components/Header";
import { Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([
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
          <Text style={formHeading}>Update product</Text>
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
              <Button
                onPress={() =>
                  navigation.navigate("productimages", { id, images: [] })
                }
                textColor={colors.color1}
              >
                Manage Image
              </Button>

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
                placeholder="Price"
              />
              <TextInput
                {...inputOptions}
                value={stock}
                onChangeText={setStock}
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
                loading={loadingOther}
                textColor={colors.color2}
              >
                Update
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

export default UpdateProduct;
