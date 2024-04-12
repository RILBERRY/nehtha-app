import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import MemoPage from './pages/MemoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { AuthContext} from './context/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogoutPage from './pages/LogoutPage';
import CreateMemoPage from './pages/CreateMemoPage';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function NavStack() {
  return (
    <Drawer.Navigator initialRouteName="Login"  >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Memo" component={MemoPage} />
      <Drawer.Screen name="Logout" component={LogoutPage} />
    </Drawer.Navigator>
  );
}

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions = {{ headerShown:false, headerBackTitleVisible:false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{  headerShown:false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{  headerShown:false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordPage}
        options={{  headerShown:false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordPage}
        options={{  headerShown:false }}
      />
    </Stack.Navigator>
  )
}


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);
  useEffect(()=>{
    SecureStore.getItemAsync('user')
    .then(userString => {
      if(userString){
        setUser(JSON.parse(userString));
      }
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });

    setTimeout(()=>{
      setIsLoading(false)
    },1000);
  }, []);


  if(isLoading){
    return(
      <View className="flex-1 align-middle justify-center">
        <ActivityIndicator size="large" color="gray" />
      </View>
    )
  }

  return (
    <>
    { user ? (
    <NavigationContainer >
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
      <NavigationContainer >
        <AuthStackNavigator/>
      </NavigationContainer>
    )}
    </>
  );
}
