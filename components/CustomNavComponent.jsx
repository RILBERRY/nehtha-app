import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme } from "../context/ThemeProvider";
import { AuthContext } from "../context/AuthProvider";
import { useContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const CustomNavComponent = (props) => {
  const { user, setUser } = useContext(AuthContext);
  const AppTheme = useTheme();
  useEffect(() => {
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          setUser(JSON.parse(userString));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {}, 1000);
  }, []);
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom header */}
      <View className="px-2">
        <View className="h-[80px] pt-2 flex flex-row justify-start items-center space-x-4">
          <Image
            style={{ width: "20%", height: "75%", resizeMode: "cover" }}
            source={require("../images/logo-white.png")}
          />
          <Text
            style={{ color: AppTheme.colors.text }}
            className="text-2xl font-bold"
          >
            Nehtha
          </Text>
        </View>
      </View>

      <View className="w-full flex pb-4">
        <View className="h-36 w-36 mx-auto bg-white rounded-2xl">
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            className="rounded-2xl"
            source={require("../images/default_pp.png")}
          />
        </View>
        <Text
          style={{ color: AppTheme.colors.text }}
          className="text-2xl text-center pt-2 font-bold"
        >
          {user.name}
        </Text>
        <Text style={{ color: AppTheme.colors.text }} className=" text-center ">
          {user.email}
        </Text>
      </View>

      {/* Drawer items */}
      <DrawerItemList {...props} />

      {/* Custom footer
      <TouchableOpacity onPress={() => console.log('Custom footer pressed')} style={styles.footer}>
        <Text style={styles.footerText}>Custom Drawer Footer</Text>
      </TouchableOpacity> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "lightgray",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  footerText: {
    fontSize: 16,
    color: "blue",
  },
});

export default CustomNavComponent;
