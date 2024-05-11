import { ScrollView, Text, TouchableOpacity, View} from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

const AllRequestsFilterComponent = () => {

  const AppTheme = useTheme();
  const { memo } = useRoute().params;

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
    </ScrollView>
  );
};


export default AllRequestsFilterComponent;
