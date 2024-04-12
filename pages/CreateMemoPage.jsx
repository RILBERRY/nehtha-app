import { Image, Text, View } from 'react-native';


export default function CreateMemoPage() {

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

      <View className="m-2">
        <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 10 }}  className="text-gray-400">Register and Create profile to become a supplier.</Text>
      </View>
    </View>

  );
}
