import { useState } from "react";
import { View, Alert, TouchableOpacity, Text } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useTheme } from "../context/ThemeProvider";

const ChangePassword = () => {
  const AppTheme = useTheme();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = () => {
    // Perform your API call to change the password
    // You may want to add validation for the old and new password fields before making the call
    if (oldPassword.trim() === "" || newPassword.trim() === "") {
      Alert.alert("Error", "Please enter both old and new password");
      return;
    }

    // Assuming your API call returns a success or error response
    // You can handle the response accordingly
    // For example:
    // changePassword(oldPassword, newPassword)
    //   .then(response => {
    //     Alert.alert('Success', 'Password changed successfully');
    //     setOldPassword('');
    //     setNewPassword('');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error', 'Failed to change password');
    //   });
  };

  return (
    <View className="w-full p-2 shadow-sm rounded-lg " style={{ backgroundColor: AppTheme.colors.listItem }}>
      <Text className="text-lg p-2"  style={{ color: AppTheme.colors.listItemText }}>Change Password</Text>
      <View className="pb-2">
        <FloatingLabelInput
          label="Password"
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={true}
        />
      </View>
      <View className="pb-2">
        <FloatingLabelInput
          label="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
      </View>
      <View className="pb-2">
        <FloatingLabelInput
          label="Enter new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View className="w-fit py-2 rounded-md bg-primary text-primary ">
        <TouchableOpacity
          className=" w-fit rounded-md bg-primary  "
          disabled={isLoading}
          onPress={() => handleChangePassword}
        >
          <Text className="text-white text-center p-2">
            {isLoading ? "Changing Password..." : "Change Password"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
