import { View, Text, ScrollView } from "react-native";
import React from "react";

import { defaultStyle, colors, formHeading } from "@/styles/styles";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import ButtonBox from "@/components/ButtonBox";
import ProductListHeading from "@/components/ProductListHeading";
import { products } from "@/screens/Home";
import ProductListItem from "@/components/ProductListItem";
import Chart from "@/components/Chart";

const AdminPanel = ({ navigation }) => {
  const navigationHandler = () => {};

  const deleteProductHandler = (id) => {
    console.log(`Deleting product with Id: ${id}`);
  };

  const loading = false;

  return (
    <View style={defaultStyle}>
      <Header back={true} />

      <View style={{ paddingTop: 70, marginBottom: 20 }}>
        <Text style={formHeading}>Admin Panel</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Chart inStock={12} outOfStock={2} />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon="plus"
                text="Product"
                handler={navigationHandler}
              />
              <ButtonBox
                icon="format-list-bulleted-square"
                text="All Orders"
                handler={navigationHandler}
                reverse={true}
              />
              <ButtonBox
                icon="plus"
                text="Category"
                handler={navigationHandler}
              />
            </View>
          </View>

          <ProductListHeading />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((product) => (
                <ProductListItem
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                  key={product._id}
                  id={product._id}
                  i={product._id}
                  price={product.price}
                  stock={product.stock}
                  name={product.name}
                  category={product.category}
                  imgSrc={product.images[0].url}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
