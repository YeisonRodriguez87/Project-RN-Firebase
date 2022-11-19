import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';
import About from './screens/About.jsx';
import ForgotPassword from './screens/ForgotPassword.jsx';
import userContext from './userContext.js';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({ email: '' });
  
  const getUserStorage = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('email')
      return userEmail !== null ? setUser(prev => ({ ...prev, email: userEmail })) : null
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const savedUser = getUserStorage()
    console.log(savedUser);
  }, [])


  return (
    <userContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerStyle: {
            backgroundColor: '#348242',
          },
          headerTitleAlign: 'start',
          headerTintColor: '#F0F7F5',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
          {user?.email ?
            <>
            <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name='About' component={About} options={{ title: 'About' }} />
            </>
            :
            <>
              <Stack.Screen name='Login' component={Login} options={{title: 'Breaking Bad App'}} />
              
              <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ title: 'Recover password' }} />
            </>
          } 
        </Stack.Navigator>
        </NavigationContainer>
      </userContext.Provider>
  );
}