import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import userContext from '../userContext';
import { getAuth } from 'firebase/auth';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Auth() {
    const { user, setUser } = useContext(userContext);
    
    const logout = () => {
        setUser({email: ''})
    }

    
  return (
    <View>
      <Text>Auth</Text>
    </View>
  )
}