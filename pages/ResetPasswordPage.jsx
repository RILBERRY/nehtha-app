import { useEffect, useState } from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, Text, ScrollView, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';

export default function ResetPasswordPage({ navigation }) {

  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const handleResetPassword = () => {
    // Handle login logic here
    console.log('Logging in with:', { email, password, passwordConfirmation, fullName, contactNumber });
  };
  const handleReset = () => {
    // Handle reset logic here
    setEmail('');
    setPassword('');
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      ({ endCoordinates }) => {
          setKeyboardOffset(250);


      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('in', keyboardOffset);
        setKeyboardOffset(0);
      }
    );


    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
  <View style={{ flex: 1 }} >
      <View className="mt-14">
        <Text  className="text-primary text-center font-semibold text-3xl">Nehtah Pharmacy</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 10 }}  className="text-gray-400">This simple online tool generates small text from your regular sized text.</Text>
      </View>
      <Image
        style={{ width: '100%', height: '40%', resizeMode: 'cover' }}
        source={require('../images/main-bg.png')}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          className=" absolute bottom-0 w-full" style={{ paddingHorizontal: 20, paddingBottom: keyboardOffset }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 5,
          }}
        >
          <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <View className="h-[80px] pt-2 pb-4 flex flex-row justify-start items-center space-x-4">
              <Image
                style={{ width: '20%', height: '100%', resizeMode: 'cover' }}
                source={require('../images/logo.png')}
              />
              <View className="w-60">
                <Text className="text-2xl text-primary">Password Reset</Text>
                <Text className=" text-gray-400">Create New Password</Text>
              </View>
            </View>

            <View className="pb-2">
             <FloatingLabelInput
              label="OTP"
              value={otp}
              keyboardType="numeric"
              onChangeText={setOtp}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            </View>
            <View className="pb-2">
             <FloatingLabelInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            </View>
            <View className="pb-2">
             <FloatingLabelInput
              label="Password Confirmation"
              value={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
              secureTextEntry={true}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            </View>

            <View className="flex flex-col gap-4">
              <View className="w-fit py-2 rounded-md bg-primary text-primary ">
                <Button
                  color="#ffff"
                  title="Reset Password"
                  onPress={handleResetPassword}
                  />
              </View>
              <View className="w-full rounded-md flex ">
                <Button
                  className="text-primary"
                  title="Back"
                  color="#1E7B7B"
                  onPress={() => navigation.navigate('ForgotPassword')}
                  />
              </View>
            </View>
          </View>
        {/* </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
      <View className="m-2">
        <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 10 }}  className="text-gray-400">Register and Create profile to become a supplier.</Text>
      </View>
    </View>

  );
}
