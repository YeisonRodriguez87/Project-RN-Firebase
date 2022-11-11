import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Main screen!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home