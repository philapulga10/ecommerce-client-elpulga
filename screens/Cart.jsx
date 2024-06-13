import { View, Text } from "react-native";
import React from "react";

import { defaultStyle } from "@/styles/styles";

const Heading = () => {
  <View style={{ paddingTop: 70, marginLeft: 35 }}>
    <Text style={{ fontSize: 25 }}>Shopping</Text>
    <Text style={{ fontSize: 25, fontWeight: "900" }}>Cart</Text>
  </View>;
};

const Cart = () => {
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emtyCart={true} />

      <Heading
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
        text1="Our"
        text2="Products"
      />

      <Text>Cart</Text>
    </View>
  );
};

export default Cart;
