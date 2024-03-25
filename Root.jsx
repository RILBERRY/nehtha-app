import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import MemoPage from './pages/MemoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthContext} from './context/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

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
    </Stack.Navigator>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);
  useEffect(()=>{
    console.log(user)

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
      <Drawer.Navigator initialRouteName="Login"  className="bg-red-500">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Notifications" component={MemoPage} />
      </Drawer.Navigator>
    </NavigationContainer>
    ) : (
      <NavigationContainer >
        <AuthStackNavigator/>
      </NavigationContainer>
    )}
    </>
  );
}
