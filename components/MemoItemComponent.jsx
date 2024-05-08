import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useTheme } from "../context/ThemeProvider";

const MemoItem = ({ memo, navigation }) => {
  const AppTheme = useTheme();
  return (
    <TouchableOpacity
      className="p-5 mb-4 shadow-sm rounded-lg "
      style={{
        backgroundColor: AppTheme.colors.listItem,
        borderColor: AppTheme.colors.borderColor,
      }}
      onPress={()=> {navigation.navigate('ViewMemo', {memo:memo})}}
    >
      <Text style={{ ...styles.title, color: AppTheme.colors.listItemText }}>
        {memo.memo_no}
      </Text>
      <Text style={{ ...styles.date, color: AppTheme.colors.listItemText }}>
        {memo.created_at}
      </Text>
      <Text style={{ ...styles.details, color: AppTheme.colors.listItemText }}>
        Name: {memo.name} ({memo.national_id_no})
      </Text>
      <Text style={{ ...styles.details, color: AppTheme.colors.listItemText }}>
        Type: {memo.type}
      </Text>
      <View className="flex justify-end w-full">
        <Text
          style={{
            ...styles.status,
            color:
              memo.status == "requested"
                ? AppTheme.status.requestedText
                : AppTheme.status.requestedText,
          }}
          className="text-right uppercase "
        >
          {memo.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    marginTop: 8,
  },
  details: {
    marginTop: 8,
  },
  status: {
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default MemoItem;
