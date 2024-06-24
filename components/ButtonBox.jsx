import { TouchableOpacity, Text } from "react-native";
import React from "react";

import { colors } from "@/styles/styles";
import { Avatar } from "react-native-paper";

const ButtonBox = ({
  icon,
  text,
  handler,
  reverse = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handler(text)}
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        width: 80,
        height: 80,
        borderRadius: 20,
        alignItems: "center",
      }}
      activeOpacity={1}
      disabled={loading}
    >
      <Avatar.Icon
        style={{ backgroundColor: reverse ? colors.color1 : colors.color3 }}
        size={50}
        color={colors.color2}
        icon={icon}
      />
      <Text style={{ color: colors.color2, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;
