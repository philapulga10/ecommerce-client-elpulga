import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { colors, defaultStyle, formHeading, defaultImg } from "@/styles/styles";
import ButtonBox from "@/components/ButtonBox";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import { useMessageAndErrorUser } from "@/utils/hooks";
import { logout } from "@/redux/actions/userActions";

const Profile = ({ navigation, route }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(
    user?.avatar ? user.avatar.url : defaultImg
  );

  const loading = useMessageAndErrorUser(navigation, dispatch, "login");

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Sign out":
        logoutHandler();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params]);

  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                style={{ backgroundColor: colors.color1 }}
                source={{ uri: avatar }}
                size={100}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button textColor={colors.color1}>Change photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>

              <Text style={{ fontWeight: "300", color: colors.color2 }}>
                {user?.email}
              </Text>
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
                  handler={navigateHandler}
                  text="Orders"
                  icon="format-list-bulleted-square"
                />
                {user?.role === "admin" && (
                  <ButtonBox
                    handler={navigateHandler}
                    text="Admin"
                    icon="view-dashboard"
                    reverse={true}
                  />
                )}
                <ButtonBox
                  handler={navigateHandler}
                  text="Profile"
                  icon="pencil"
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text="Password"
                  icon="pencil"
                />
                <ButtonBox
                  handler={navigateHandler}
                  text="Sign out"
                  icon="exit-to-app"
                />
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
    </>
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
