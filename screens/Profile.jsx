import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { colors, defaultStyle, formHeading } from "@/styles/styles";
import { Avatar, Button } from "react-native-paper";

const Profile = ({ navigation }) => {
  const [
    avatar,
    // setAvatar
  ] = useState(null);

  return (
    <View style={defaultStyle}>
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>

      <View style={styles.container}>
        <Avatar.Image
          style={{ backgroundColor: colors.color1 }}
          source={{ uri: avatar }}
          size={100}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("camera", { updateProfile: true })}
        >
          <Button textColor={colors.color1}>Change photo</Button>
        </TouchableOpacity>

        <Text style={styles.name}>{user.name}</Text>

        <Text style={{ fontWeight: "300", color: colors.color2 }}>
          {user.email}
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

const user = {
  name: "elpulga",
  email: "elpulga@gmail.com",
};
