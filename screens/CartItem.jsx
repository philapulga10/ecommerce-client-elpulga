import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

import { colors } from "@/styles/styles";
import { iconOptions } from "./ProductDetails";

const CartItem = ({
  navigate,
  name,
  amount,
  quantity,
  stock,
  index,
  imgSrc,
  id,
  decrementHandler,
  incrementHandler,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image source={{ uri: imgSrc }} style={styles.img} />
      </View>

      <View style={{ width: "40%", paddingHorizontal: 25 }}>
        <Text
          onPress={() => navigate.navigate("productdetails", { id })}
          numberOfLines={1}
          style={{ fontSize: 17 }}
        >
          {name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: "900" }}>
          {amount}
        </Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity>
          <TouchableOpacity onPress={() => decrementHandler(id, quantity)}>
            <Avatar.Icon {...iconOptions} icon="minus" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            onPress={() => incrementHandler(id, quantity, stock)}
          >
            <Avatar.Icon {...iconOptions} icon="plus" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: "-20%",
    left: "10%",
  },
  quantityContainer: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  quantityText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
});

export default CartItem;
