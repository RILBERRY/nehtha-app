import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import { useContext, useEffect, useState } from "react";
import axiosConfig from "../services/axiosConfig";
import { AuthContext } from '../context/AuthProvider';
import MemoItem from '../components/MemoItemComponent';
import { useTheme } from '../context/ThemeProvider';
import { Image } from 'react-native';

export default function MemoPage({ navigation }) {
  const AppTheme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [memosData, setMemosData] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchMemos = async () => {
    try {
      setIsLoading(true);
      axiosConfig.defaults.headers.common = {
        Accept: 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
      const response = await axiosConfig.get('/memos');
      setMemosData(response.data.data);
      console.log(response.data.data);

      setError(null);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };
  useEffect(() => {
    // fetchMemos();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchMemos();

  }
  const handleCreateMemo = () => {
    console.log('Button pressed and function executed');
    navigation.navigate('CreateMemo');
  };

  const renderItem = ({ item }) => <MemoItem memo={item} />;

  return (

    <View style={{ flex: 1, alignItems: 'center'}}>
        {isLoading ? (
          <ActivityIndicator size="large" color="gray" />
        ):(
        <View className="flex flex-1 w-full p-4">
          <FlatList
            data={memosData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />

        </View>
        )}
    {/* <View className=" absolute w-16 h-16 bottom-10 right-6 bg-secondary text-primary p-2 rounded-[100%]">
        <TouchableOpacity
          style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: 'lightgray' }}
          onPress={handleCreateMemo}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
            test
          </Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity className=" absolute w-16 h-16 bottom-10 right-6 bg-secondary text-primary p-2 rounded-full "
       onPress={handleCreateMemo}
      >
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          source={require("../images/add.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
