import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

export default function About({ navigation }) {
  return (
    <View>
      <Text>Nosotros</Text>
      <View style={styles.viewRow}>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>  
            <Image 
              style={styles.tabIcon}
              source={require('../assets/home.png')}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.navigate('About')}>  
            <Image 
              style={styles.tabIcon}
              source={require('../assets/about.png')}
            />
          </TouchableNativeFeedback>
        </View>
    </View>
  )
}