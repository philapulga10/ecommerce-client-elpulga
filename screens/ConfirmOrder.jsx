import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import Header from "@/components/Header";
import Heading from "@/components/Heading";
import ConfirmOrderItem from "@/components/ConfirmOrderItem";
import { colors, defaultStyle } from "@/styles/styles";
import { cartItems } from "@/screens/Cart";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const PriceTag = ({ heading, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <Text style={{ fontWeight: "800" }}>{heading}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const ConfirmOrder = () => {
  const navigate = useNavigation();

  const itemsPrice = 4000;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;

  return (
    <View style={defaultStyle}>
      <Header back={true} />

      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Confirm"
        text2="Order"
      />

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView>
          {cartItems.map((item) => {
            return (
              <ConfirmOrderItem
                key={item.product}
                price={item.price}
                image={item.image}
                name={item.name}
                quantity={item.quantity}
              />
            );
          })}
        </ScrollView>
      </View>

      <PriceTag heading="Subtotal" value={itemsPrice} />
      <PriceTag heading="Shipping" value={shippingCharges} />
      <PriceTag heading="Tax" value={tax} />
      <PriceTag heading="Total" value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon="chevron-right"
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmOrder;
