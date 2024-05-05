import { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

export default function CreateMemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    patientID: "",
    patientName: "",
    referenceCode: "",
    contactNo: "",
    memoType: null,
    medicineName: ""
  });

    const selectMemoType = (choosenMemoType) => {
      handleChange( 'memoType', choosenMemoType);
    };

    const handleChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSaveMemo = () => {
      setIsLoading(true);
      console.log(formData);
      console.log("Memo saved!");
    };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      className="bg-white m-4 rounded-lg pt-5"
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-xl font-bold mb-4">What Are You Looking for</Text>
        <TouchableOpacity
          className="p-4 rounded-lg mb-4 border border-primary"
          style={[formData.memoType === "for-prescription" && styles.selectedMemoButton]}
          onPress={() => selectMemoType("for-prescription")}
        >
          <Text className="text-xl font-bold text-primary">
            For Prescription
          </Text>
          <Text className="text-lg text-primary">
            Look for the Pharmacies who have the Medicine In the Prescription
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-4 rounded-lg mb-4 border border-primary"
          style={[formData.memoType === "for-medicine" && styles.selectedMemoButton]}
          onPress={() => selectMemoType("for-medicine")}
        >
          <Text className="text-xl font-bold text-primary">For Medicine</Text>
          <Text className="text-lg text-primary">
            Look for Pharmacies Selling the medicine
          </Text>
        </TouchableOpacity>

        {formData.memoType === "for-prescription" && (
          <View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Patient National ID No"
                value={formData.patientID}
                onChangeText={(text) => handleChange('patientID', text)}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Patient Full Name"
                value={formData.patientName}
                onChangeText={(text) => handleChange('patientName', text)}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Reference code (eg: PR/00000/2024/0031)"
                value={formData.referenceCode}
                onChangeText={(text) => handleChange('referenceCode', text)}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Contact No"
                value={formData.contactNo}
                onChangeText={(text) => handleChange('contactNo', text)}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
            <Text className="text-md pl-2 text-gray-600 font-bold mb-4">Attachment</Text>
            </View>
          </View>
        )}

        {formData.memoType === "for-medicine" && (
          <View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Medicine Name"
                value={formData.medicineName}
                onChangeText={(text) => handleChange('medicineName', text)}
                style={styles.input}
              />
            </View>
          </View>
        )}

        <View className="w-fit py-2 rounded-md bg-primary text-primary mb-20">
          <Button
            color="#ffff"
            title={isLoading ? "Creating Memo..." : "Create Memo"}
            disabled={isLoading}
            onPress={handleSaveMemo}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
