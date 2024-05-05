import { useState, useEffect} from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import * as SecureStore from "expo-secure-store";

export default function SettingPage({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [systemTheme, setSystemTheme] = useState('light');

  useEffect(() => {
    // Fetch the system theme from SecureStore when the component mounts
    SecureStore.getItemAsync("systemTheme")
      .then((systemThemeString) => {
        if (systemThemeString) {
          setSystemTheme(systemThemeString)
          setIsToggled(systemThemeString === "dark"); // Update isToggled state based on system theme
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handlePress = () => {
    const newTheme = isToggled ? 'light' : 'dark'; // Determine the new theme based on the toggle state
    setSystemTheme(newTheme); // Update the system theme state
    setIsToggled(!isToggled); // Update the toggle state
    console.log(newTheme);
    // Save the selected theme to SecureStore
    SecureStore.setItemAsync('systemTheme', newTheme)
    .then(() => {
      return () => {
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Add a delay if needed to ensure the theme change is applied
      };
    }
  )
    .catch((err) => console.log('Error updating theme:', err));

  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Change Theme"
      />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: 'lightgray' }}
          onPress={handlePress}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
            {isToggled ? 'Light' : 'Dark'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
