import { ScrollView, View, Text } from 'react-native'
import React from 'react'

import Header from "@/components/Header";
import Loader from "@/components/Loader";

import {
  colors,
  defaultStyle,
  formHeading,
} from "@/styles/styles";
import { Headline } from 'react-native-paper';

const Orders = () => {
  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (<Loader />) : (<View>
        <Text style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>{
            ORDERS.length > 0 ? null : <Headline style={{ textAlign: "center" }}>No orders yet</Headline>
          }</ScrollView>
        </Text>
      </View>)}
    </View>
  )
}

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
    _id: "12345",
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
  }
]