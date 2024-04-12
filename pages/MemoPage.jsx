import { Image, TouchableOpacity, View } from 'react-native';


export default function MemoPage({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center'}}>
      <TouchableOpacity className=" absolute w-16 h-16 bottom-10 right-6 bg-secondary text-primary p-2 rounded-[100%]"
       onPress={() => navigation.navigate('CreateMemo')}
      >
      <Image
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        source={require("../images/add.png")}
      />
      </TouchableOpacity>

    </View>
  );
}
