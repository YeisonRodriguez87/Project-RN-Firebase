import { View, Text, Pressable, FlatList, ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import userContext from '../userContext.js';
import { getAuth } from 'firebase/auth';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetCharacters from '../hooks/useGetCharacters.js';
import Character from '../components/Character.jsx';
const auth = getAuth();
const url = 'https://www.breakingbadapi.com/api/characters'


const Home = ({ navigation }) => {
  const [data, error, isLoading] = useGetCharacters(url)
  const { user, setUser } = useContext(userContext)
  console.log({data});
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
    
  return isLoading ?
    (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={'blue'}/>
      </View>
    ) :
    error ?
    (
      <View>
          <Text>{error}</Text>
      </View>
    ):
    (
      <View style={styles.container}>
        <Text style={styles.text}>Hola👋 {user.email}</Text>
        <Pressable style={styles.btnLogOut} onPress={logout}>
          <Text style={styles.textButton}>Cerrar Sesión</Text>
        </Pressable>
        <FlatList
          data={data}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <Text style={styles.text}>All Characters</Text>
            }
            renderItem={({item}) => <Character key={item.char_id} item={item}/>}
        />
        <View>
          
        </View>        
      </View>
    )
}

export default Home