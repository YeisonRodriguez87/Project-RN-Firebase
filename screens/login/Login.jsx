import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'


const Login = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Login screen!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Login