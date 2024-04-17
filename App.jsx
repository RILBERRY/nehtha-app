import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import Root from "./Root"
import * as SecureStore from "expo-secure-store";

import { CustomDarkTheme, CustomDefaultTheme } from "./AppTheme";

export default function App(){
  SecureStore.getItemAsync("systemTheme")
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
  const systemTheme = 'light';
  // const systemTheme = useColorScheme();
  const AppTheme = systemTheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <AuthProvider>
       <ThemeProvider theme={AppTheme}>
        <Root/>
       </ThemeProvider>
    </AuthProvider>
  )
}
