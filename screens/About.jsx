import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

export default function About({ navigation }) {
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Inicio</Text>
      </TouchableHighlight>
      <Text>Nosotros</Text>
    </View>
  )
}