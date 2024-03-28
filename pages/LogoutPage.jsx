import React from 'react';
import { Button, View, Text} from 'react-native';
import { AuthContext } from '../context/AuthProvider';
import { useContext, useEffect } from 'react';


export default function LogoutPage({ navigation }) {
  const {logout} = useContext(AuthContext);
  useEffect(()=> {

  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Are you sure you want Logout?</Text>
      <Button
        onPress={() => logout() }
        title="Yes"
      />
    </View>
  );
}
