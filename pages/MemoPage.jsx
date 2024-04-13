import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { useContext, useEffect, useState } from "react";
import axiosConfig from "../services/axiosConfig";
import { AuthContext } from '../context/AuthProvider';
import MemoItem from '../components/MemoItemComponent';

export default function MemoPage({ navigation }) {

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
  const renderItem = ({ item }) => <MemoItem memo={item} />;

  return (

    <View style={{ flex: 1, alignItems: 'center'}}>
        {isLoading ? (
          <ActivityIndicator size="large" color="gray" />
        ):(
        <View className="flex flex-1 w-full p-4 bg-gray-100">
          <FlatList
            data={memosData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />

        </View>
        )}

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
