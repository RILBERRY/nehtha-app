import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useTheme } from '../context/ThemeProvider';

const CustomNavComponent = (props) => {
    const AppTheme = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom header */}
      <View style={styles.header}>
        <View className="h-[80px] pt-2 pb-4 flex flex-row justify-start items-center space-x-4">
              <Image
                style={{ width: "20%", height: "100%", resizeMode: "cover" }}
                source={require("../images/logo-white.png")}
              />
              <Text style={{color: AppTheme.colors.text }} className="text-2xl font-bold" >Nehtha</Text>
            </View>

      </View>

      {/* Drawer items */}
      <DrawerItemList {...props} />

      {/* Custom footer
      <TouchableOpacity onPress={() => console.log('Custom footer pressed')} style={styles.footer}>
        <Text style={styles.footerText}>Custom Drawer Footer</Text>
      </TouchableOpacity> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  footerText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CustomNavComponent;
