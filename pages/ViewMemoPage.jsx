import {
  Text,
  StyleSheet,
  View
} from "react-native";
import { useTheme } from "../context/ThemeProvider";

export default function ViewMemoPage( { route }) {
  const { memo } = route.params;
  const AppTheme = useTheme();

  return (
    <View
      style={{ flex: 1 }}
      className="pt-5 px-5"
    >
      <View className=" border border-gray-300 p-2 rounded-xl flex flex-col gap-2">
      <View>
      <Text className="text-lg font-semibold">{memo.memo_no}</Text>
      <Text className="text-gray-400">{memo.created_at}</Text>
      </View>
      <View>
      <Text className="font-semibold">{memo.name}</Text>
      <Text className="text-gray-400">{memo.national_id_no}</Text>
      </View>
      <Text>{memo.type}</Text>
      <Text className="uppercase text-center font-semibold text-base">{memo.status}</Text>

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
