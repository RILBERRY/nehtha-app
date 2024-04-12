import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { FloatingLabelInput } from "react-native-floating-label-input";

export default function CreateMemoPage() {
  const [patientID, setPatientID] = useState('');
  const [patientName, setPatientName] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [memoType, setMemoType] = useState(null);

  const selectMemoType = (choosenMemoType) => {
    setMemoType(choosenMemoType);
  };
  const handleSaveMemo = () => {
    setIsLoading(true);
    console.log('Memo saved!');
  };
  return (
    <View className=' p-4 bg-white m-4 rounded-lg'>
      <Text className='text-xl font-bold mb-4'>
        What Are You Looking for {memoType}
      </Text>
      <TouchableOpacity
        className="bg-secondary p-4 rounded-lg mb-4 border border-primary"
      onPress={() => selectMemoType('for-prescription')}  >
        <Text className='text-xl font-bold text-primary'>For Prescription</Text>
        <Text className='text-lg text-primary'>Look for the Pharmacies who have the Medicine In the Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-4 rounded-lg mb-4 border border-primary"  onPress={() => selectMemoType('for-medicine')}>
        <Text className='text-xl font-bold text-primary'>For Prescription</Text>
        <Text className='text-lg text-primary'>Look for the Pharmacies who have the Medicine In the Prescription</Text>
      </TouchableOpacity>
       <View className="pb-2">
          <FloatingLabelInput
            label="Patient National ID No"
            value={patientID}
            onChangeText={setPatientID}
            className="border border-gray-300  "
            style={{
              backgroundColor: "#fffff",
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginBottom: 15,
            }}
          />
        </View>
       <View className="pb-2">
          <FloatingLabelInput
            label="Patient Full Name"
            value={patientName}
            onChangeText={setPatientName}
            style={{
              backgroundColor: "#fffff",
              borderWidth: 1,
              borderColor: "#ffffef",
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginBottom: 15,
            }}
          />
        </View>
       <View className="pb-2">
          <FloatingLabelInput
            label="Reference code (eg: PR/00000/2024/0031)"
            value={referenceCode}
            onChangeText={setReferenceCode}
            style={{
              backgroundColor: "#fffff",
              borderWidth: 1,
              borderColor: "#ffffef",
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginBottom: 15,
            }}
          />
        <Text className='mb-2 text-gray-400 pl-2'>
          The reference Code is in top of Prescription
        </Text>
      </View>
      <View className="pb-2">
          <FloatingLabelInput
            label="Contact No"
            value={contactNo}
            onChangeText={setContactNo}
            style={{
              backgroundColor: "#fffff",
              borderWidth: 1,
              borderColor: "#ffffef",
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginBottom: 15,
            }}
          />
        </View>
        <View className="w-fit py-2 rounded-md bg-primary text-primary ">
          <Button color="#ffff"
          title={isLoading ? 'Createing Memo...' : 'Create Memo'}
          disabled={isLoading}
          onPress={() => handleSaveMemo} />
        </View>
    </View>
  );
}
