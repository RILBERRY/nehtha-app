import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeProvider';

const MemoItem = ({ memo }) => {
  const AppTheme = useTheme();
  return (
    <TouchableOpacity className="p-5 mb-4 shadow-sm rounded-lg " style={{backgroundColor: AppTheme.colors.listItem, borderColor: AppTheme.colors.borderColor }} >
      <Text style={styles.title}>{memo.memo_no}</Text>
      <Text style={styles.date}>{memo.created_at}</Text>
      <Text style={styles.details}>
        Name: {memo.name} ({memo.national_id_no})
      </Text>
      <Text style={styles.details}>Type: {memo.type}</Text>
      <Text style={styles.status}>{memo.status}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 8,
    color: '#666666',
  },
  details: {
    marginTop: 8,
  },
  status: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#007bff', // You can change color based on status
  },
});

export default MemoItem;
