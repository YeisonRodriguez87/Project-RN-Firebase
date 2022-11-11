import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'


export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
          <Text>Crear Usuario!!!</Text>
          <Pressable onPress={() => navigation.navigate('Login')} >
            <Text>Iniciar sesión</Text>
        </Pressable>
    </View>
  )
}