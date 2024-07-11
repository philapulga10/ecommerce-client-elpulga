import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import Header from "@/components/Header";
import SearchModal from "@/components/SearchModal";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { colors, defaultStyle } from "../styles/styles";
import Heading from "@/components/Heading";
import { getAllProducts } from "@/redux/actions/productAction";
import { useSetCategories } from "@/utils/hooks";

const Home = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const { products } = useSelector((state) => {
    return state.product;
  });

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id, name, price, image, stock) => {
    if (stock === 0) {
      return Toast.show({
        type: "error",
        text1: "Out of stock",
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
        quantity,
      },
    });

    Toast.show({
      type: "success",
      text1: "Added to cart",
    });
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllProducts(searchQuery, category));
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  return (
    <>
      {activeSearch && (
        <SearchModal
          products={products}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
        />
      )}
      <View style={defaultStyle}>
        <Header back={true} />

        <View
          style={{
            paddingTop: 70,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Heading text1="Our" text2="Products" />

          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                style={{ backgroundColor: colors.color2, elevation: 12 }}
                icon="magnify"
                color="gray"
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 80, flexDirection: "row" }}>
          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item) => (
              <Button
                onPress={() => categoryButtonHandler(item._id)}
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => {
              return (
                <ProductCard
                  id={item._id}
                  key={item._id}
                  i={index}
                  stock={item.stock}
                  name={item.name}
                  price={item.price}
                  image={item.images[0].url}
                  addToCardHandler={addToCardHandler}
                  navigate={navigate}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute="home" />
    </>
  );
};

export default Home;
