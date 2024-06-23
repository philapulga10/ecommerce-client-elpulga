import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Avatar } from "react-native-paper";
import { colors } from "@/styles/styles";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigation();

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home");
        break;
      case 1:
        navigate.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) {
          navigate.navigate("profile");
        } else {
          navigate.navigate("login");
        }
        break;
      default:
        navigate.navigate("home");
        break;
    }
  };

  return (
    loading === false && (
      <View
        style={{
          backgroundColor: colors.color1,
          borderTopRightRadius: 120,
          borderTopLeftRadius: 120,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            onPress={() => navigatationHandler(1)}
            activeOpacity={0.8}
          >
            <Avatar.Icon
              {...avatarOptions}
              icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigatationHandler(2)}
            activeOpacity={0.8}
          >
            <Avatar.Icon
              color={colors.color2}
              size={50}
              style={{ backgroundColor: colors.color1 }}
              icon={
                isAuthenticated === false
                  ? "login"
                  : activeRoute === "profile"
                    ? "account"
                    : "account-outline"
              }
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            backgroundColor: colors.color2,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            top: -50,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigatationHandler(0)}
              activeOpacity={0.8}
            >
              <Avatar.Icon
                color={colors.color2}
                size={50}
                style={{ backgroundColor: colors.color1 }}
                icon={activeRoute === "home" ? "home" : "home-outline"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

export default Footer;

const avatarOptions = {
  color: colors.color2,
  size: 50,
  style: {
    backgroundColor: colors.color1,
  },
};
