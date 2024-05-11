import { useState, useEffect } from "react";
import { Switch, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useTheme } from "../context/ThemeProvider";

export default function SettingPage({ navigation }) {
  const AppTheme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [systemTheme, setSystemTheme] = useState("light");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    // Fetch the system theme from SecureStore when the component mounts
    SecureStore.getItemAsync("systemTheme")
      .then((systemThemeString) => {
        if (systemThemeString) {
          setSystemTheme(systemThemeString);
          setIsToggled(systemThemeString === "dark"); // Update isToggled state based on system theme
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleThemeToggle = () => {
    const newTheme = isToggled ? "light" : "dark"; // Determine the new theme based on the toggle state
    setSystemTheme(newTheme); // Update the system theme state
    setIsToggled(!isToggled); // Update the toggle state
    console.log(newTheme);
    // Save the selected theme to SecureStore
    SecureStore.setItemAsync("systemTheme", newTheme);
  };
  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // You can add logic here to enable/disable notifications
  };

  const handleLanguageChange = () => {
    // Logic for changing the language of the app
  };

  const handleAccountSettings = () => {
    // Navigate to account settings screen
  };

  const handlePrivacyAndSecurity = () => {
    // Navigate to privacy and security settings screen
  };

  const handleCheckUpdates = async () => {
    // Logic for checking updates
    try {
      const supported = await Linking.canOpenURL(
        "market://details?id=com.yourapp.package"
      );
      if (supported) {
        await Linking.openURL("market://details?id=com.yourapp.package");
      } else {
        console.log("Can't handle url: App not installed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const handleHelpAndSupport = () => {
    // Navigate to help and support screen
  };

  const handleFeedback = () => {
    // Navigate to feedback screen or open feedback form
  };

  return (
    <View style={{ flex: 1 }} className="p-5">
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
          color: AppTheme.colors.listItemText,
        }}
      >
        Settings
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: AppTheme.colors.listItemText }}>Dark Theme</Text>
        <Switch value={isToggled} onValueChange={handleThemeToggle} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* <Text style={{ color: AppTheme.colors.listItemText }}>
          Notifications
        </Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
        /> */}
      </View>
      {/* <View className="flex flex-col gap-y-6 ">
        <TouchableOpacity onPress={handleLanguageChange}>
          <Text style={{ color: AppTheme.colors.listItemText }}>
            Change Language
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAccountSettings}>
          <Text style={{ color: AppTheme.colors.listItemText }}>
            Account Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePrivacyAndSecurity}>
          <Text style={{ color: AppTheme.colors.listItemText }}>
            Privacy and Security
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCheckUpdates}>
          <Text style={{ color: AppTheme.colors.listItemText }}>
            Check for Updates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHelpAndSupport}>
          <Text style={{ color: AppTheme.colors.listItemText }}>
            Help and Support
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFeedback}>
          <Text style={{ color: AppTheme.colors.listItemText }}>Feedback</Text>
        </TouchableOpacity>

      </View> */}

      {/* </View> */}
      <View className="absolute bottom-7 w-full">
        <Text
          style={{ color: AppTheme.colors.listItemText }}
          className="text-center"
        >
          App Version: 1.0.0
        </Text>
      </View>
    </View>
  );
}
