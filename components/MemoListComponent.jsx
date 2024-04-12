import { View, FlatList, StyleSheet} from 'react-native';
import MemoItem from '../components/MemoItemComponent';

const MemoList = ({ memos }) => {
  const renderItem = ({ item }) => <MemoItem memo={item} />; // Render each memo item using MemoItem component

  return (
    <View className="flex flex-1 w-full p-4 bg-gray-100">

        <FlatList
        data={memos} // Data array containing memo objects
        isRefereshing={isRefereshing}
        onRefresh={handleRefresh}
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item) => item.id.toString()} // Unique key extractor
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default MemoList;
