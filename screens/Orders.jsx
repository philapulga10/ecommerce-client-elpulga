import { ScrollView, View, Text } from "react-native";
import React from "react";
import { Headline } from "react-native-paper";

import Header from "@/components/Header";
import Loader from "@/components/Loader";
import OrderItem from "@/components/OrderItem";
import { colors, defaultStyle, formHeading } from "@/styles/styles";

const Orders = () => {
  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {ORDERS.length > 0 ? (
              ORDERS.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  admin={true}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.country}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No orders yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;

const ORDERS = [
  {
    _id: "12345",
    shippingInfo: {
      address: "Bong Sao",
      city: "TPHCM",
      country: "TPHCM",
      pinCode: 696969,
    },
    createdAt: "12-2-2024T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "12346",
    shippingInfo: {
      address: "Bong Sao",
      city: "TPHCM",
      country: "TPHCM",
      pinCode: 696969,
    },
    createdAt: "12-2-2024T2343",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 20000,
  },
];
