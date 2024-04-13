import { useContext, useEffect, useState } from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, Text, ScrollView, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { AuthContext } from '../context/AuthProvider';

export default function RegisterPage({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const {register, error, isLoading} = useContext(AuthContext);
  const [keyboardOffset, setKeyboardOffset] = useState(0);

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
        {/* <View className=" absolute bottom-0 w-full " style={{ paddingHorizontal: 20, paddingBottom: keyboardOffset }}> */}
          <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <View className="h-[80px] pt-2 pb-4 flex flex-row justify-start items-center space-x-4">
              <Image
                style={{ width: '20%', height: '100%', resizeMode: 'cover' }}
                source={require('../images/logo.png')}
              />
              <View className="w-60">
                <Text className="text-2xl text-primary">Welcome</Text>
                <Text className=" text-gray-400">Register your account</Text>
              </View>
            </View>
            {error &&
              <View className="w-fit  rounded-md flex flex-row ">
                <Text className="my-auto text-red-600">
                  {error}
                </Text>
              </View>
              }
            <View className="pb-2">
             <FloatingLabelInput
              label="Full Name"
              value={name}
              onChangeText={setName}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            </View>

            <View className="pb-2">
             <FloatingLabelInput
              label="Contact Number"
              value={contact}
              keyboardType="numeric"
              onChangeText={setContact}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            </View>
            <View className="pb-2">
             <FloatingLabelInput
              label="Email"
              value={email}
              onChangeText={setEmail}
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
                  title={isLoading ? 'Register in...' : 'Register'}
                  disabled={isLoading}
                  onPress={() => register( name, contact, email, password, passwordConfirmation )}
                  />
              </View>
              <View className="w-full rounded-md flex flex-row ">
                <Text className="my-auto text-gray-400">I already have an account!</Text>
                <Button
                  className="text-primary"
                  title="Login"
                  color="#1E7B7B"
                  onPress={() => navigation.navigate('Login')}
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
