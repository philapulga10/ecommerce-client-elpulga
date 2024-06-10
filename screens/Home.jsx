import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { colors, defaultStyle } from "../styles/styles";

const Home = () => {
  const navigate = useNavigation();

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => { };

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
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>

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

const categories = [
  {
    _id: "1",
    category: "Nice",
  },
  {
    _id: "2",
    category: "Football",
  },
  {
    _id: "3",
    category: "Man",
  },
  {
    _id: "4",
    category: "Women",
  },
  {
    _id: "5",
    category: "Helicopter",
  },
];

const products = [
  {
    _id: "1",
    name: "1",
    price: 123,
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    _id: "2",
    name: "2",
    price: 123,
    stock: 456,
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    _id: "3",
    name: "3",
    price: 123,
    stock: 456,
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    _id: "4",
    name: "4",
    price: 123,
    stock: 456,
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
  {
    _id: "5",
    name: "5",
    price: 123,
    stock: 456,
    images: [
      {
        url: "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      },
    ],
  },
];
