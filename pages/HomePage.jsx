import { Text, View } from 'react-native';
import { useTheme } from '../context/ThemeProvider';

export default function HomePage({ navigation }) {
  const AppTheme = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text  style={{ color: AppTheme.colors.textSecondary }} className="text-3xl" >Welcome to Nehtha </Text>
    </View>
  );
}
