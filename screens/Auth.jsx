import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import userContext from '../userContext.js';
import { getAuth } from 'firebase/auth';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const auth = getAuth();


const Auth = () => {
  const { user, setUser } = useContext(userContext)

  const logout = () => {
    auth.signOut()
    .then(() => {
      setUser({ email: '' })
      deleteUserStorage('email')
    })
    .catch(err => console.log(err))
  }

  const deleteUserStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (err) {
      console.log(err);
    }
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido {user.email}</Text>
      <Pressable style={styles.btnLogOut} onPress={logout}>
        <Text style={styles.textButton}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  )
}

export default Auth