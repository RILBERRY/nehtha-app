import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";
import { Ionicons } from "react-native-vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function ViewMemoPage({ route }) {
  const Tab = createMaterialTopTabNavigator();
  const AppTheme = useTheme();
  const { memo } = route.params;
  const [filters, setFilters] = useState(null);

  return (
    <View className="pt-5 px-5 flex flex-1">
      <View
        className="p-5 mb-4 shadow-sm rounded-lg flex flex-col space-y-2 "
        style={{
          backgroundColor: AppTheme.colors.listItem,
          borderColor: AppTheme.colors.borderColor,
        }}
      >
        <View>
          <View className="flex justify-between flex-row">
            <Text
              className="text-lg font-semibold"
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              {memo.memo_no}
            </Text>
            <TouchableOpacity>
              <Ionicons
                name={"pencil-outline"}
                size={25}
                color={AppTheme.colors.listItemText}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            {memo.created_at}
          </Text>
        </View>
        <View>
          <Text
            className="font-semibold"
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            {memo.name}
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            {memo.national_id_no}
          </Text>
        </View>
        <Text style={{ ...styles.title, color: AppTheme.colors.listItemText }}>
          {memo.type}
        </Text>
        <Text
          className="uppercase text-center font-semibold text-base"
          style={{
            ...styles.status,
            color:
              memo.status == "requested"
                ? AppTheme.status.requestedText
                : AppTheme.status.requestedText,
          }}
        >
          {memo.status}
        </Text>
      </View>
      <ScrollView style={{ flex: 1, padding: 10 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12].map((item) => (
        <View key={item}
        className="p-5 mb-4 shadow-sm rounded-lg flex flex-col space-y-2 "
        style={{
          flex: 1,
          backgroundColor: AppTheme.colors.listItem,
          borderColor: AppTheme.colors.borderColor,
        }}
      >
        <View>
          <Text
            className="text-lg font-semibold"
            style={{  color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{  color: AppTheme.colors.listItemText }}
          >
            {memo.created_at}
          </Text>
        </View>
        <View className="flex flex-row justify-between  ">
          <TouchableOpacity className="flex flex-row gap-x-2">
            <Ionicons
              name={"storefront-outline"}
              size={25}
              color={AppTheme.colors.listItemText}
            />
            <Text
              className="font-semibold"
              style={{  color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
          <Text
            className="uppercase text-center font-semibold text-base"
            style={{

              color:
                memo.status == "requested"
                  ? AppTheme.status.requestedText
                  : AppTheme.status.requestedText,
            }}
          >
            {memo.status}
          </Text>
        </View>
      </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    justifyContent: "flex-start", // Align content to the top
  },
  inputContainer: {
    marginBottom: 20, // Add margin between input fields
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  selectedMemoButton: {
    backgroundColor: "#ADEBEB",
  },
});
