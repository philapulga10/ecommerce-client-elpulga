import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

import { loadUser } from "@/redux/actions/userActions";
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
import ChangePassword from "@/screens/ChangePassword";
import Orders from "@/screens/Orders";
import Camera from "@/screens/Camera";
import AdminPanel from "@/screens/Admin/AdminPanel";
import Categories from "@/screens/Admin/Categories";
import AdminOrders from "@/screens/Admin/AdminOrders";
import UpdateProduct from "@/screens/Admin/UpdateProduct";
import NewProduct from "@/screens/Admin/NewProduct";
import ProductImages from "@/screens/Admin/ProductImages";

const Stack = createNativeStackNavigator();

function MainApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
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
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="camera" component={Camera} />

          <Stack.Screen name="adminpanel" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="adminorders" component={AdminOrders} />
          <Stack.Screen name="updateproduct" component={UpdateProduct} />
          <Stack.Screen name="newproduct" component={NewProduct} />
          <Stack.Screen name="productimages" component={ProductImages} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" />
    </NavigationContainer>
  );
}

const stripeKey =
  "pk_test_51PUMP604dw2GOFFhqzTGzxOrIT5PTyiMqduoTSgOxA8k0qENoLEIjwHtP7OD56RowBZKi7w2FN2yVeVEH5dEYYJv00AiR5FdFG";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="6-pack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <MainApp />
      </Provider>
    </StripeProvider>
  );
}
