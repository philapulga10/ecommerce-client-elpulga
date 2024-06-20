import { colors } from "@/styles/styles";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <ActivityIndicator
      style={{ top: "50%", position: "absolute", alignSelf: "center" }}
      size={100}
      color={colors.color3}
    />
  );
};

export default Loader;
