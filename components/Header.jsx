import { TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

import { colors } from "../styles/styles";

const Header = ({ back, emptyCart = false }) => {
  const navigate = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => {
    console.log("Empty cart");
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          style={{
            position: "absolute", left: 20,
            // top: 40, review
            zIndex: 10
          }}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color4 }}
            color={
              route.name === "productdetails" ? colors.color2 : colors.color3
            }
            icon="arrow-left"
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("cart")}
        style={{
          position: "absolute", right: 20,
          // top: 40, review
          zIndex: 10
        }}
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 }}
          color={
            route.name === "productdetails" ? colors.color2 : colors.color3
          }
          icon={emptyCart ? "delete-outline" : "cart-outline"}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
