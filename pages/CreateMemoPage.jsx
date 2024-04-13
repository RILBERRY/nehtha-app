import { useEffect, useState } from "react";
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
  const [patientID, setPatientID] = useState("");
  const [patientName, setPatientName] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [memoType, setMemoType] = useState(null);
  const [medicineName, setMedicineName] = useState("");

  const selectMemoType = (choosenMemoType) => {
    setMemoType(choosenMemoType);
  };
  const handleSaveMemo = () => {
    setIsLoading(true);
    console.log("Memo saved!");
  };

  useEffect(() => {
    // Add any necessary useEffect logic here
  }, []);

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
          style={[memoType === "for-prescription" && styles.selectedMemoButton]}
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
          style={[memoType === "for-medicine" && styles.selectedMemoButton]}
          onPress={() => selectMemoType("for-medicine")}
        >
          <Text className="text-xl font-bold text-primary">For Medicine</Text>
          <Text className="text-lg text-primary">
            Look for Pharmacies Selling the medicine
          </Text>
        </TouchableOpacity>

        {memoType === "for-prescription" && (
          <View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Patient National ID No"
                value={patientID}
                onChangeText={setPatientID}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Patient Full Name"
                value={patientName}
                onChangeText={setPatientName}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Reference code (eg: PR/00000/2024/0031)"
                value={referenceCode}
                onChangeText={setReferenceCode}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Contact No"
                value={contactNo}
                onChangeText={setContactNo}
                style={styles.input}
              />
            </View>
            <View className="pb-2">
            <Text className="text-md pl-2 text-gray-600 font-bold mb-4">Attachment</Text>
            </View>
          </View>
        )}

        {memoType === "for-medicine" && (
          <View>
            <View className="pb-2">
              <FloatingLabelInput
                label="Medicine Name"
                value={medicineName}
                onChangeText={setMedicineName}
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
