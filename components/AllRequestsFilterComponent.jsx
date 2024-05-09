import { View} from "react-native";
import { useTheme } from "../context/ThemeProvider";

const AllRequestsFilterComponent = () => {
  const AppTheme = useTheme();

  return (
    <ScrollView className="flex flex-1 w-full p-4">
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
      <View
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
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
          >
            REQ-2024-001020-0121
          </Text>
          <Text
            style={{ ...styles.title, color: AppTheme.colors.listItemText }}
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
              style={{ ...styles.title, color: AppTheme.colors.listItemText }}
            >
              POINT PHARMACY
            </Text>
          </TouchableOpacity>
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
      </View>
    </ScrollView>
  );
};


export default AllRequestsFilterComponent;
