import { View, Image, StyleSheet } from "react-native";
import React from "react";

import { colors } from "@/styles/styles";
import { Avatar } from "react-native-paper";

const ImageCard = ({ src, id, deleteHandler }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        source={{ uri: src }}
      />

      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          style={{ backgroundColor: colors.color1 }}
          icon="delete"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    elevation: 5,
    padding: 15,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
    height: 300,
  },
});
