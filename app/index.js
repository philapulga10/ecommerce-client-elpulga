import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

import Home from "@/screens/Home";
import ProductDetails from "@/screens/ProductDetails";
import Cart from "@/screens/Cart";
import ConfirmOrder from "@/screens/ConfirmOrder";
import Payment from "@/screens/Payment";
import Login from "@/screens/Login";
import SignUp from "@/screens/SignUp";
import ForgetPassword from "@/screens/ForgetPassword";
import Verify from "@/screens/Verify";
import Profile from "@/screens/Profile";
import UpdateProfile from "@/screens/UpdateProfile";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Group>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="productdetails" component={ProductDetails} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="confirmorder" component={ConfirmOrder} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="forgetpassword" component={ForgetPassword} />
            <Stack.Screen name="verify" component={Verify} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="updateprofile" component={UpdateProfile} />
          </Stack.Group>
        </Stack.Navigator>

        <Toast position="top" />
      </NavigationContainer>
    </Provider>
  );
}
