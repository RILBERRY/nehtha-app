import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import HomePage from "./pages/HomePage";
import MemoPage from "./pages/MemoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { AuthContext } from "./context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LogoutPage from "./pages/LogoutPage";
import CreateMemoPage from "./pages/CreateMemoPage";
import { useTheme } from "./context/ThemeProvider";
import CustomNavComponent from "./components/CustomNavComponent";
import SettingPage from "./pages/SettingPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NavStack() {
  const AppTheme = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "white",
      }}
      drawerContent={(props) => <CustomNavComponent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Memo"
        component={MemoPage}
        options={{
          title: "Memo",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "reader" : "reader-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingPage}
        options={{
          title: "Setting",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutPage}
        options={{
          title: "Logout",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "log-out" : "log-out-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const AppTheme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          setUser(JSON.parse(userString));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 align-middle justify-center">
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <>
      {user ? (
        <NavigationContainer theme={AppTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name=" "
              component={NavStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="CreateMemo" component={CreateMemoPage} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      )}
    </>
  );
}
