import { useEffect, useState } from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
// import SvgUri from 'react-native-svg-uri';


export default function LoginPage({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { email, password });
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
          setKeyboardOffset(300);


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
<View style={{ flex: 1 }}>
      <View className="mt-20">
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, padding: 10 }} className="text-primary">Nehtah Pharmacy</Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 10 }}  className="text-primary">This simple online tool generates small text from your regular sized text.</Text>
      </View>
      <Image
        style={{ width: '100%', height: '40%', resizeMode: 'cover' }}
        source={require('../images/main-bg.png')}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      >
        <View className=" absolute bottom-1/3 w-full " style={{ paddingHorizontal: 20, paddingBottom: keyboardOffset }}>
          <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={{ backgroundColor: '#f3f4f6', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 12, marginBottom: 15 }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <Button
                title="Login"
                onPress={handleLogin}
                color="#3b82f6"
                style={{ backgroundColor: '#3b82f6', borderRadius: 5, paddingHorizontal: 20, paddingVertical: 12, width: '48%' }}
              />
              <Button
                title="Reset"
                onPress={handleReset}
                color="#3b82f6"
                style={{ backgroundColor: '#ef4444', borderRadius: 5, paddingHorizontal: 20, paddingVertical: 12, width: '48%' }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>

  );
}
