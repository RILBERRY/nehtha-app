import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import Root from "./Root"
import * as SecureStore from "expo-secure-store";

import { CustomDarkTheme, CustomDefaultTheme } from "./AppTheme";
import { useState } from "react";

export default function App(){
  const [systemTheme, setSystemTheme] = useState('light') ;
  const [isLoading, setIsLoading] = useState(false) ;

  SecureStore.getItemAsync("systemTheme")
      .then((systemThemeString) => {
        console.log(systemThemeString, 'here');
        if (systemThemeString) {
          setSystemTheme(systemThemeString);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  const AppTheme = systemTheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <AuthProvider>
       <ThemeProvider theme={AppTheme}>
        <Root/>
       </ThemeProvider>
    </AuthProvider>
  )
}
