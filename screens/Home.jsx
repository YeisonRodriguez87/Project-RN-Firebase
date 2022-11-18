import { View, Text, Pressable, FlatList, ActivityIndicator, Image, TouchableNativeFeedback, Modal } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import userContext from '../userContext.js';
import { getAuth } from 'firebase/auth';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetCharacters from '../hooks/useGetCharacters.js';
import Character from '../components/Character.jsx';
import { useNavigation } from '@react-navigation/native';


const auth = getAuth();
const url = 'https://www.breakingbadapi.com/api/characters'


const Home = ({ navigation }) => {
  const navigate = useNavigation()
  const [data, error, isLoading] = useGetCharacters(url)
  const {user, setUser} = useContext(userContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [character, setCharacter] = useState({})
  const [dataQuery, setDataQuery] = useState([])
  

  const handleQuery = (str) => {
    const query = data.filter(el => el.nickname.toLowerCase().includes(str.toLowerCase()) || el.name.toLowerCase().includes(str.toLowerCase()))
    setDataQuery(prev => prev = query)
  }  
  
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

  useEffect(() => {
    navigate.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search...',
        onChangeText: (e) => handleQuery(e.nativeEvent.text)
      }
    })
    setDataQuery(data)
  }, [data])

  if (isLoading) return <ActivityIndicator size={"large"} color={'#2DB63C'}/>
  if (error) return <Text>{error}</Text> 
    
  return dataQuery &&
    (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>¡Hello👋 {user.email}!</Text>
          <Pressable style={styles.btnLogOut} onPress={logout}>
            <Text style={styles.textButton}>Log Out</Text>
          </Pressable>
        </View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalBack}>
            <View style={styles.modalView}>
              <Image
                style={styles.imgModal}
                source={{uri: character.img}}
                />
              <Text style={styles.subheading}>{character.name}</Text>
              <Text style={styles.text}>Nickname: <Text>{character.nickname}</Text></Text>
              <Text style={styles.text}>Occupation: {character.occupation[0]}</Text>
              <Text style={styles.text}>Birthday: {character.birthday}</Text>
              <Text style={styles.text}>Status: {character.status}</Text>
              <Text style={styles.text}>Portrayed: {character.portrayed}</Text> 
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textButtonClose}>Close</Text>
              </Pressable>
            </View>
          </View>          
        </Modal> 
        <FlatList
          data={dataQuery}
          showsVerticalScrollIndicator={false}
            ListHeaderComponent={
            <>
              <Text style={styles.title}>Breaking Bad Characters</Text>
            </>
          }
            renderItem={({ item }) =>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible)
                  setCharacter(item)
                }}
              >
                <Character
                  key={item.char_id}
                  item={item}                
                />
              </Pressable>
            }
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
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

export default Home