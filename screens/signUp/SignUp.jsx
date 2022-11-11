import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'


const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>This is the SignUp screen!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default SignUp