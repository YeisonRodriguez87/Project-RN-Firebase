import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';
import userContext from './userContext.js';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({email: ''});
  return (
    <userContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerStyle: {
            backgroundColor: '#1A1D41',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
          <Stack.Screen name='Login' component={Login} options={{title: 'Iniciar Sesión'}} />
          <Stack.Screen name='Home' component={Home} options={{title: 'Inicio'}} />
        </Stack.Navigator>
        </NavigationContainer>
      </userContext.Provider>
  );
}