import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import Header from "@/components/Header";
import { colors, defaultStyle } from "@/styles/styles";
import { useSelector } from "react-redux";
import { getProductDetails } from "@/redux/actions/productAction";

const CarouselCardItem = ({ item, index }) => {
  return (
    <View key={index} style={style.container}>
      <Image style={style.image} source={{ uri: item.url }} />
    </View>
  );
};

const ProductDetails = ({ route: { params } }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const {
    product: { name, price, stock, description, images },
  } = useSelector((state) => state.product);

  console.log("Product", name, price, stock, description, images);

  const [quantity, setQuantity] = useState(1);
  const isCarousel = useRef(null);

  const incrementQty = () => {
    if (stock <= quantity) {
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity <= 1) {
      return;
    }

    setQuantity((prev) => prev - 1);
  };

  const addToCardHandler = () => {
    if (stock === 0) {
      return Toast.show({
        type: "error",
        text1: "Out of stock",
        text2: "This is text 2",
      });
    }

    Toast.show({
      type: "success",
      text1: "Added to cart",
    });

    console.log("Adding to cart", quantity);
  };

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, isFocused]);

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />

      <Carousel
        ref={isCarousel}
        layout="default"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text style={{ fontSize: 25 }} numberOfLines={2}>
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>{price}</Text>
        <Text
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
          numberOfLines={8}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quantity
          </Text>

          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon {...iconOptions} icon="minus" />
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon {...iconOptions} icon="plus" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={addToCardHandler}>
          <Button icon="cart" style={style.btn} textColor={colors.color2}>
            Add to cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    width: 25,
    height: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    width: 25,
    height: 25,
  },
};
