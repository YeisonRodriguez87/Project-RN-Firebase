import { View, Text, Pressable, FlatList, ActivityIndicator, Image, TouchableNativeFeedback, Modal, ImageBackground } from 'react-native';
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
    const query = data.filter(el => el.name.toLowerCase().includes(str.toLowerCase()))
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
        tintColor: '#F0F7F5',
        onChangeText: (e) => handleQuery(e.nativeEvent.text)
      }
    })
    setDataQuery(data)
  }, [data])


  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={"large"}
          color={'#2DB63C'}
          />
      </View>
    )
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    )
  } 
    
  return dataQuery &&
    (
      <ImageBackground source={require('../assets/BreakingBadHome.png')} resizeMode='cover' style={styles.imageBackgroundHome}>
        <View style={styles.container}>
          <View style={styles.containerHelloAndLogout}>
            <Text style={styles.textGreeting}>¡Hello, {user.email}👋!</Text>
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
                <Text style={styles.textModal}>Nickname: <Text><Text>{character.nickname}</Text></Text></Text>
                <Text style={styles.textModal}>Occupation: {character.occupation}</Text>
                <Text style={styles.textModal}>Birthday: {character.birthday}</Text>
                <Text style={styles.textModal}>Status: {character.status}</Text>
                <Text style={styles.textModal}>Portrayed: {character.portrayed}</Text> 
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textButton}>Close</Text>
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
      </ImageBackground>
    )
}

export default Home