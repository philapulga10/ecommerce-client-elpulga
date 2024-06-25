import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

import { colors } from "@/styles/styles";
import MyModal from "@/components/MyModal";

const ProductListItem = ({
  navigate,
  deleteHandler,
  id,
  i,
  price,
  stock,
  name,
  category,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModal((prev) => !prev)}
        onPress={() => navigate.navigate("productdetails", { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <Image
            source={{ uri: imgSrc }}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          />

          <Text
            style={{
              color: colors.color2,
              width: 60,
            }}
          >
            {price}
          </Text>

          <Text
            style={{
              color: colors.color2,
              maxWidth: 120,
            }}
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text
            style={{
              color: colors.color2,
              maxWidth: 60,
            }}
            numberOfLines={1}
          >
            {category}
          </Text>

          <Text
            style={{
              color: colors.color2,
              maxWidth: 40,
            }}
            numberOfLines={1}
          >
            {stock}
          </Text>
        </View>
      </TouchableOpacity>

      {
        openModal && (
          <MyModal
            id={id}
            navigate={navigate}
            setOpenModal={setOpenModal}
            deleteHandler={deleteHandler}
          />
        )
      }
    </>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
