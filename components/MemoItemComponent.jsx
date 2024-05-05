import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeProvider';

const MemoItem = ({ memo }) => {
  const AppTheme = useTheme();
  return (
    <TouchableOpacity className="p-5 mb-4 shadow-sm rounded-lg " style={{backgroundColor: AppTheme.colors.listItem, borderColor: AppTheme.colors.borderColor }} >
      <Text style={{...styles.title, color: AppTheme.colors.text}}>{memo.memo_no}</Text>
      <Text style={{...styles.date,  color: AppTheme.colors.listItem}}>{memo.created_at}</Text>
      <Text style={{...styles.details,  color: AppTheme.colors.listItem}}>
        Name: {memo.name} ({memo.national_id_no})
      </Text>
      <Text style={{...styles.details,  color: AppTheme.colors.listItem}}>Type: {memo.type}</Text>
      <Text style={{...styles.status,  color: AppTheme.colors.listItem}}>{memo.status}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 8,
  },
  details: {
    marginTop: 8,
  },
  status: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default MemoItem;
