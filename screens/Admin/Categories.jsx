import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Button, TextInput } from "react-native-paper";

import Header from "@/components/Header";
import {
  defaultStyle,
  colors,
  formHeading,
  inputOptions,
} from "@/styles/styles";

const CategoryCard = ({ id, name, deleteHandler }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{name}</Text>

      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          style={{ backgroundColor: colors.color1 }}
          icon="delete"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const Categories = () => {
  const [category, setCategory] = useState("");

  const loading = true;

  const submitHandler = () => {};

  const deleteHandler = (id) => {
    console.log(`Deleting category with Id: ${id}`);
  };

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Categories</Text>
      </View>

      <ScrollView style={{ marginBottom: 20 }}>
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}
        >
          {CATEGORIES.map((category) => {
            return (
              <CategoryCard
                key={category._id}
                id={category._id}
                name={category.name}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          onChangeText={setCategory}
          value={category}
          placeholder="Category"
        />

        <Button
          style={{ backgroundColor: colors.color1, margin: 20, padding: 6 }}
          onPress={submitHandler}
          loading={loading}
          textColor={colors.color2}
          disabled={!category}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    padding: 15,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    shadowOpacity: 0.2,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

const CATEGORIES = [
  {
    _id: "1",
    name: "Laptop",
  },
  {
    _id: "2",
    name: "Laptop",
  },
  {
    _id: "3",
    name: "Laptop",
  },
];
