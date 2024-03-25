import { Button, View } from 'react-native';

export default function LoginPage({ navigation }) {
  return (
    <View className="flex-1  justify-center ">
      <Button onPress={() => navigation.goBack()} title="Register page "/>
    </View>
  );
}
