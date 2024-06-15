import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import Header from "@/components/Header";
import Heading from "@/components/Heading";
import CartItem from "@/screens/CartItem";
import { colors, defaultStyle } from "@/styles/styles";

const Cart = () => {
  const incrementHandler = () => { };

  const decrementHandler = () => { };

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
          {cartItems.map((item, index) => {
            return (
              <CartItem
                key={item.product}
                id={item.product}
                name={item.name}
                stock={item.stock}
                amount={item.price}
                imgSrc={item.images[0].url}
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

      <TouchableOpacity>
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

const cartItems = [
  {
    name: "Macbook",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
    product: "Macbook product",
    stock: 3,
    price: 99999,
    quantity: 2,
  },
  {
    name: "Puma shoes",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
    product: "Shoes product",
    stock: 3,
    price: 88888,
    quantity: 3,
  },
  {
    name: "Puma shoes 123",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
    product: "Shoes product",
    stock: 3,
    price: 88888,
    quantity: 3,
  },
  {
    name: "Puma shoes 456",
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
    product: "Shoes product",
    stock: 3,
    price: 88888,
    quantity: 3,
  },
];
