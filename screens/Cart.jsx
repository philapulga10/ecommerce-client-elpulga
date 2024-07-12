import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/Header";
import Heading from "@/components/Heading";
import CartItem from "@/screens/CartItem";
import { colors, defaultStyle } from "@/styles/styles";
import Toast from "react-native-toast-message";

const Cart = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const incrementHandler = (id, name, price, image, stock, quantity) => {
    const newQuantity = quantity + 1;

    if (stock <= quantity) {
      return Toast.show({
        type: "error",
        text1: "Maximun value added",
      });
    }

    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQuantity,
      },
    });
  };

  const decrementHandler = (id, name, price, image, stock, quantity) => {
    const newQuantity = quantity - 1;

    if (1 > quantity) {
      return dispatch({
        type: "removeFromCart",
        payload: id,
      });
    }

    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQuantity,
      },
    });
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emtyCart={true} />

      <Heading
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
        text1="Shopping"
        text2="Cart"
      />

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
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
            })
          ) : (
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Not items yet
            </Text>
          )}
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
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
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
