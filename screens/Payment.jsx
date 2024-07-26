import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useStripe } from "@stripe/stripe-react-native";
import Toast from "react-native-toast-message";
import axios from "axios";

import { colors, defaultStyle } from "@/styles/styles";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { placeOrder } from "@/redux/actions/otherActions";
import { useMessageAndErrorOther } from "@/utils/hooks";
import { SERVER } from "@/redux/store";
import Loader from "@/components/Loader";

const Payment = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loaderLoading, setLoaderLoading] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const redirectToLogin = () => {
    navigation.navigate("login");
  };

  const codHandler = (paymentInfo) => {
    const shippingInfo = {
      address: user.address,
      city: user.city,
      country: user.country,
      pinCode: user.pinCode,
    };

    const itemsPrice = route.params.itemsPrice;
    const shippingCharges = route.params.shippingCharges;
    const taxPrice = route.params.taxPrice;
    const totalAmount = route.params.totalAmount;

    dispatch(
      placeOrder(
        cartItems,
        shippingInfo,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        paymentInfo
      )
    );
  };

  const onlineHandler = async () => {
    try {
      const {
        data: { client_secret },
      } = await axios.post(
        `${SERVER}/order/payment`,
        {
          totalAmount: route.params.totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const init = await stripe.initPaymentSheet({
        paymentIntentClientSecret: client_secret,
        merchantDisplayName: "6PackEcom",
      });

      if (init.error) {
        return Toast.show({
          type: "error",
          text2: init.error.message,
        });
      }

      const presentSheet = await stripe.presentPaymentSheet();

      setLoaderLoading(true);

      if (presentSheet.error) {
        setLoaderLoading(false);

        return Toast.show({
          type: "error",
          text1: presentSheet.error.message,
        });
      }

      const { paymentIntent } = await stripe.retrievePaymentIntent(
        client_secret
      );

      if (paymentIntent.status === "succeeded") {
        return codHandler({
          id: paymentIntent.id,
          status: paymentIntent.status,
        });
      }
    } catch (error) {
      console.log("----------------------error", error);

      return Toast.show({
        type: "error",
        text1: "Some error",
        text2: error,
      });
    }
  };

  const loading = useMessageAndErrorOther(
    dispatch,
    navigation,
    "profile",
    () => ({ type: "clearCart" })
  );

  return loaderLoading ? (
    <Loader />
  ) : (
    <View style={defaultStyle}>
      <Header back={true} />

      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Payment"
        text2="Method"
      />

      <View style={styles.container}>
        <RadioButton.Group
          value={paymentMethod}
          onValueChange={setPaymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash on delivery</Text>
            <RadioButton color={colors.color1} value="COD" />
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Online</Text>
            <RadioButton color={colors.color1} value="ONLINE" />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === "COD"
            ? () => codHandler()
            : onlineHandler
        }
        disabled={loading}
      >
        <Button
          style={styles.btn}
          textColor={colors.color2}
          icon={
            paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
          loading={loading}
          disabled={loading}
        >
          {paymentMethod === "COD" ? "Place order" : "Pay"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});
