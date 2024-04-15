import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import Root from "./Root"
import { CustomDarkTheme, CustomDefaultTheme } from "./AppTheme";

export default function App(){
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
