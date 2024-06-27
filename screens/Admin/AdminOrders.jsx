import { View, ScrollView, Text } from "react-native";
import React from "react";

import Header from "@/components/Header";
import { defaultStyle, colors, formHeading } from "@/styles/styles";
import OrderItem from "@/components/OrderItem";
import { ORDERS } from "@/screens/Orders";
import { Headline } from "react-native-paper";

const AdminOrders = () => {
  const loading = false;
  const proccessOrderLoading = false;

  const updateHandler = () => {};

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>All Orders</Text>
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
                  updateHandler={updateHandler}
                  loading={proccessOrderLoading}
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

export default AdminOrders;
