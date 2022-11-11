import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';
import SignUp from './screens/SignUp.jsx';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{title: 'Iniciar Sesión'}} />
        <Stack.Screen name='Home' component={Home} options={{title: 'Inicio'}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{title: 'Crear Usuario'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}