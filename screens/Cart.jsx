import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Header from "@/components/Header";
import Heading from "@/components/Heading";
import CartItem from "@/screens/CartItem";
import { colors, defaultStyle } from "@/styles/styles";

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = () => {};

  const decrementHandler = () => {};

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emtyCart={true} />

      <Heading
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
        text1="Our"
        text2="Products"
      />

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {CART_ITAMES.map((item, index) => {
            return (
              <CartItem
                navigate={navigate}
                key={item.product}
                id={item.product}
                name={item.name}
                stock={item.stock}
                amount={item.price}
                imgSrc={item.image}
                index={index}
                quantity={item.quantity}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            );
          })}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>5</Text>
      </View>

      <TouchableOpacity
        onPress={
          CART_ITAMES.length > 0
            ? () => navigate.navigate("confirmorder")
            : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon="cart"
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

export const CART_ITAMES = [
  {
    name: "Macbook",
    image:
      "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
    product: "Macbook product",
    stock: 3,
    price: 99999,
    quantity: 2,
  },
  {
    name: "Puma shoes",
    image:
      "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
    product: "Shoes product",
    stock: 3,
    price: 88888,
    quantity: 3,
  },
  {
    name: "Puma shoes 123",
    image:
      "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
    product: "Shoes product",
    stock: 3,
    price: 88888,
    quantity: 3,
  },
  {
    name: "Puma shoes 456",
    image:
      "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
    product: "Shoes product",
    stock: 3,
    price: 88888,
    quantity: 3,
  },
];
