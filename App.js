import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}