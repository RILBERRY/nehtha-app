import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { Ionicons } from "react-native-vector-icons";
import AllRequestsFilterComponent from "../components/AllRequestsFilterComponent";
import { useState } from "react";

export default function ViewMemoPage({ route }) {
  const AppTheme = useTheme();
  const [filters, setFilters] = useState(null);
  const renderItem = ({ item }) => <AllRequestsFilterComponent filter={filters} />; // Render each memo item using MemoItem component

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
      <View>
          {/* filtered component */}
      </View>
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
