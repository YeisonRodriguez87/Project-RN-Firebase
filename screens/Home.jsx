import { View, Text, Pressable, FlatList, ActivityIndicator, Image, TouchableNativeFeedback, Modal, TouchableHighlight } from 'react-native';
import React, { useContext, useState } from 'react';
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
  const [modalVisible, setModalVisible] = useState(false)
  const [character, setCharacter] = useState({})
  
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
        <View>
          <Text style={styles.text}>Hello👋 {user.email}</Text>
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
                style={styles.imgSize}
                source={{uri: character.img}}
                />
              <Text style={styles.text}>{character.name}</Text>
              <Text style={styles.text}>{character.nickname}</Text>
              <Text style={styles.text}>{character.birthday}</Text>
              <Text style={styles.text}>{character.status}</Text>
              <Text style={styles.text}>{character.portrayed}</Text>
                
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
          data={data}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={styles.text}>Breaking Bad</Text>
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